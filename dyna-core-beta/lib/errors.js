const ORIGINATING_SERVICE = "fortnite";
const INTENT = "prod-live";

// Color values imported and converted from a Python Project

const bcolor = {
  HEADER: "\033[95m",
  OKBLUE: "\033[94m",
  OKCYAN: "\033[96m",
  OKGREEN: "\033[92m",
  WARN: "\033[93m",
  FAIL: "\033[91m",
  END: "\033[0m",
  BOLD: "\033[1m",
  UNDERLINE: "\033[4m",
};

class ErrDef {
  constructor(errorCode, errorMessage, numericErrorCode, httpStatusCode) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.numericErrorCode = numericErrorCode;
    this.httpStatusCode = httpStatusCode;
  }

  apply(res, ...messageVars) {
    return this.applyCustomMessage(res, this.errorMessage, ...messageVars);
  }

  applyCustomMessage(res, message, ...messageVars) {
    return res
      .status(this.httpStatusCode)
      .set("X-Epic-Error-Code", this.numericErrorCode)
      .set("X-Epic-Error-Name", this.errorCode)
      .json({
        errorCode: this.errorCode,
        errorMessage: message.format(messageVars),
        messageVars: messageVars,
        numericErrorCode: this.numericErrorCode,
        originatingService: ORIGINATING_SERVICE,
        intent: INTENT,
      });
  }
}

class ApiException extends Error {
  constructor(errDef) {

    super(errDef.errorMessage);

    this.errDef = errDef;
    this.errorMessage = errDef.errorMessage;
    this.errorCode = errDef.errorCode
    this.httpcode = errDef.httpStatusCode

    console.log(errDef.errorCode);
   // console.log(errDef.errorMessage);
    console.log(`${bcolor.OKBLUE}[INFO] For developers: HTTP STATUS CODE ${errDef.httpStatusCode}${bcolor.END}`);

  }

  with(...messageVars) {
    this.messageVars = messageVars;
    return this;
  }

  withMessage(errorMessage, ...messageVars) {
    this.errorMessage = errorMessage;
    this.messageVars = messageVars;
    return this;
  }

  apply(res) {
    return this.messageVars
      ? this.errDef.applyCustomMessage(
          res,
          this.errorMessage,
          ...this.messageVars
        )
      : this.errDef.applyCustomMessage(res, this.errorMessage);
  }
}

module.exports = {
  com: {
    dynamite: {
      common: {
        not_found: new ErrDef(
          `${bcolor.WARN}errors.com.dynamite.common.not_found${bcolor.END}`,
          `${bcolor.FAIL}Sorry the resource you were trying to find could not be found or has not yet been implemented.`,
          1004,
          404
        ),
        server_error: new ErrDef(
          `${bcolor.WARN}errors.com.dynamite.common.server_error${bcolor.END}`,
          `${bcolor.FAIL}Sorry an error occurred and we were unable to resolve it.${bcolor.END}`,
          1000,
          500
        ),
        throttled: new ErrDef(
          `${bcolor.WARN}errors.com.dynamite.common.throttled${bcolor.END}`,
          `${bcolor.FAIL}Operation access is limited by throttling policy, please try again later.${bcolor.END}`,
          1041,
          429
        ),
      },
      fortnite: {
        item_not_found: new ErrDef(
          `${bcolor.WARN}errors.com.dynamite.fortnite.item_not_found${bcolor.END}`,
          `${bcolor.FAIL}Requested locker item was not found!${bcolor.END}`,
          16006,
          404
        ),
        operation_not_found: new ErrDef(
          `${bcolor.WARN}errors.com.dynamite.fortnite.operation_not_found${bcolor.END}`,
          `${bcolor.FAIL}Operation requested not permitted or valid.${bcolor.END}`,
          16035,
          404
        ),
      },
      modules: {
        gameplayutils: {
          not_enough_mtx: new ErrDef(
            `${bcolor.WARN}errors.com.dynamite.modules.gameplayutils.not_enough_mtx${bcolor.END}`,
            `${bcolor.FAIL}Purchase required more MTX than gameplay account can provide.${bcolor.END}`,
            12720,
            400
          ),
        },
        gamesubcatalog: {
          catalog_out_of_date: new ErrDef(
            `${bcolor.WARN}errors.com.dynamite.modules.gamesubcatalog.catalog_out_of_date${bcolor.END}`,
            `${bcolor.FAIL}Could not find catalog item requested!${bcolor.END}`,
            28001,
            400
          ),
        },
        profiles: {
          invalid_command: new ErrDef(
            `${bcolor.WARN}errors.com.dynamite.modules.profiles.invalid_command${bcolor.END}`,
            `${bcolor.FAIL}Action is not valid on profile.${bcolor.END}`,
            12801,
            400
          ),
          operation_forbidden: new ErrDef(
            `${bcolor.WARN}errors.com.dynamite.modules.profiles.operation_forbidden${bcolor.END}`,
            `${bcolor.FAIL}Unable to find template configuration for profile creation.${bcolor.END}`,
            12813,
            403
          ),
        },
      },
    },
  },
  ErrDef,
  ApiException,
};
