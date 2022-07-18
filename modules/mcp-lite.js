/**
 * MCP_Lite.js - MCP File that takes a profile command request and writes data to a file
 * Based upon StormFN's original backend
 * Optimized to become readable
 * Author: Immanuel Garcia
 * Copyright (C) 2021  Immanuel Garcia
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/old-licenses/gpl-2.0.html.
 */

// Imports

const fs = require("fs");
const path = require("path");
const random = require("random").int;

// Application Constants

const templateDirectory = path.join(__dirname, "../home/default/profile/");
const profileDirectory = path.join(__dirname, "../home/");
const season = 9;

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

// Profile Functions

module.exports = (app) => {
  function checkForExistingProfile(accountId) {
    if (
      !fs.existsSync(
        path.join(profileDirectory, `${accountId}/profile/${accountId}.json`)
      )
    ) {
      try {
        console.log(`NO PROFILE FOUND! Creating one in /home/${accountId} dir`);
        fs.mkdirSync(path.join(profileDirectory, `${accountId}/profile/`), {
          recursive: true,
        });
        fs.copyFileSync(
          path.join(templateDirectory, `defaultLockerConf.json`),
          path.join(profileDirectory, `${accountId}/profile/${accountId}.json`)
        );

        console.log("Success. No error returned.");
      } catch (e) {
        console.log(`${bcolor.FAIL}Failed creating profile!${bcolor.END}`);
        throw e;
      }
    }
  }

  function saveProfile(directory, accountId, data) {
    fs.writeFileSync(
      path.join(profileDirectory, `${accountId}/profile/${accountId}.json`),
      JSON.stringify(data, null, 3)
    );
  }

  // Response Function

  function fabricateResponse(profileData, profileId, rvn) {
    return {
      // HACK: Patches bug when Fortnite Command Revision is a negative (such as -1)
      // Example:
      // rvn = -1
      // -1 - 0 + (1-0) = 0 (FALSE)
      profileRevision: rvn ? rvn - 0 + (1 - 0) : 1 || 1,
      profileId: profileId,
      profileChangesBaseRevision: Number(rvn) || 1,
      profileChanges: [
        {
          changeType: "fullProfileUpdate",
          profile: profileData,
        },
      ],

      // HACK: Patches bug when Fortnite Command Revision is a negative (such as -1)
      // Example:
      // rvn = -1
      // -1 - 0 + (1-0) = 0 (FALSE)
      profileCommandRevision: rvn ? rvn - 0 + (1 - 0) : 1 || 1,
      serverTime: new Date().toISOString(),
      responseVersion: 1,
    };
  }

  // Throw Error

  function throwError(code, message, numericCode, org, intent, messageVars) {
    console.error(
      `${
        bcolor.FAIL
      }[MCP] ERROR: ${code}, ${message}, #${numericCode}, ORG ${org}, [${
        messageVars || undefined
      }] --> ${intent || "prod"}${bcolor.END}`
    );
    return {
      errorCode: code,
      errorMessage: message,
      numericErrorCode: numericCode,
      originatingService: org,
      messageVars: messageVars || undefined,
      intent: intent || "prod",
    };
  }

  // Template Creation Functions

  // ------------- Stubs -------------------- //
  // Collections

  function createCollections(config, accountId) {
    genCommonConfig(config, accountId);
  }

  // Creative

  function genCreative(config, accountId) {
    genCommonConfig(config, accountId);
  }

  // --------------------------------------- //

  // Common Config

  function genCommonConfig(template, accountId) {
    // Does Nothing

    template.accountId = accountId;
    template.created = new Date().toISOString();
    template.updated = new Date().toISOString();
    template.profileId = "athena";

    return template;
  }

  // CommonCore

  function genCommonCore(config, template, accountId) {
    template._id = accountId;
    template.accountId = accountId;
    template.created = new Date().toISOString();
    template.updated = new Date().toISOString();
    template.profileId = "athena";

    try {
      template.stats.attributes.mtx_affiliate = "MTX";
    } catch (error) {
      console.log(
        "Caught Error While Setting Affiliate. This is a non-fatal error."
      );
    }

    return template;
  }

  // Main Athena Function

  function createAthena(config, accountId) {
    let rawTemp = fs.readFileSync(
      path.join(templateDirectory, `profile_athena.json`),
      "utf8"
    );
    let template = JSON.parse(rawTemp);

    // Do the usual

    template.accountId = accountId;
    template.created = new Date().toISOString();
    template.updated = new Date().toISOString();
    template.profileId = "athena";
    template.version = "v1";

    // Do the Loadout

    let lockerSlot =
      template.items.sandbox_loadout.attributes.locker_slots_data.slots;
    let lockerSlot__DATA =
      template.items.sandbox_loadout.attributes.locker_slots_data;

    // Copy from template to main locker

    // Copy Default "Backpack" Specified in the Template to the Current Working Profile
    lockerSlot.Backpack.items[0] = config.Backpack.ID;
    lockerSlot.Backpack.activeVariants = config.Backpack.Variants;

    // Copy Default "Character (skin)" Specified in the Template to the Current Working Profile
    lockerSlot.Character.items[0] = config.Character.ID;
    lockerSlot.Character.activeVariants = config.Character.Variants;

    // Copy Default "Emote" Specified in the Template to the Current Working Profile
    lockerSlot.Dance.items = config.Dance.ID;
    lockerSlot.Dance.activeVariants = config.Dance.Variants;

    // Copy Default "Glider" Specified in the Template to the Current Working Profile
    lockerSlot.Glider.items[0] = config.Glider.ID;
    lockerSlot.Glider.activeVariants = config.Glider.Variants;

    // Copy Default "Ammo Item Wrapper" Specified in the Template to the Current Working Profile
    lockerSlot.ItemWrap.items = config.ItemWrap.ID;
    lockerSlot.ItemWrap.activeVariants = config.ItemWrap.Variants;

    // Copy Default "Splash Screen" Specified in the Template to the Current Working Profile
    lockerSlot.LoadingScreen.items[0] = config.LoadingScreen.ID;
    lockerSlot.LoadingScreen.activeVariants = config.LoadingScreen.Variants;

    // Copy Default "Lobby Music" Specified in the Template to the Current Working Profile
    lockerSlot.MusicPack.items[0] = config.MusicPack.ID;
    lockerSlot.MusicPack.activeVariants = config.MusicPack.Variants;

    // Copy Default "Pickaxe" Specified in the Template to the Current Working Profile
    lockerSlot.Pickaxe.items[0] = config.Pickaxe.ID;
    lockerSlot.Pickaxe.activeVariants = config.Pickaxe.Variants;

    // Copy Default "Contrail" Specified in the Template to the Current Working Profile
    lockerSlot.SkyDiveContrail.items[0] = config.SkyDiveContrail.ID;
    lockerSlot.SkyDiveContrail.activeVariants = config.SkyDiveContrail.Variants;

    // Copy Default "Homebase Banner Icon + Color" Specified in the Template to the Current Working Profile
    lockerSlot__DATA.banner_icon_template = config.BannerIconTemplate;
    lockerSlot__DATA.banner_color_template = config.BannerColorTemplate;

    // Account Server Status

    let stats = template.stats.attributes;

    stats.accountLevel = parseInt(config.level);
    stats.book_level = parseInt(config.level);
    stats.book_purchased = true;
    stats.level = parseInt(config.level, 10);
    stats.lifetime_wins = random(1, 100); // Can't win too much!
    stats.season_num = season;

    // Favorite Everything

    let items = config.items;

    Object.keys(config.favorites).forEach((item) => {
      items[item["id"]].attributes.favorite = true;
    });

    template.items = items;

    return template;
  }

  // Command Response

  app.post(
    "/fortnite/api/game/v2/profile/:accountId/client/:command",
    (req, res) => {
      let request = req.body;

      // Local Constants Grabbed From URL Above

      const command = req.params.command;
      const accountId = req.params.accountId;

      const profileId = req.query.profileId;
      const rvn = req.query.rvn;

      checkForExistingProfile(accountId);

      // Load Profile And Template
      let raw = fs.readFileSync(
        path.join(profileDirectory, `${accountId}/profile/${accountId}.json`),
        "utf8"
      );
      let raw2 = fs.readFileSync(
        path.join(templateDirectory, `profile_${profileId}.json`),
        "utf8"
      );
      let profile = JSON.parse(raw);
      let template = JSON.parse(raw2);

      switch (command) {
        case "ClientQuestLogin":
          res.status(204).end();
          // Just do nothing
          break;

        case "QueryProfile":
          switch (profileId) {
            case "collections":
              // Generate Collections Configuration
              res
                .json(
                  fabricateResponse(
                    createCollections(profile, accountId),
                    profileId
                  )
                )
                .end();
              break;

            case "athena":
              // Generate Athena Profile Configuration
              res
                .json(
                  fabricateResponse(createAthena(profile, accountId), profileId)
                )
                .end();
              break;
            case "profile0":
              break;

            case "creative":
              res
                .json(
                  fabricateResponse(genCreative(profile, accountId), profileId)
                )
                .end();
              break;

            case "common_core":
              res
                .json(
                  fabricateResponse(
                    genCommonCore(profile, template, accountId),
                    profileId
                  )
                )
                .end();
              break;

            case "common_public":
              res
                .json(
                  fabricateResponse(
                    genCommonConfig(profile, accountId),
                    profileId
                  )
                )
                .end();
              break;

            case "collection_book_schematics0":
              break;
            case "collection_book_people0":
              break;
            case "metadata":
              break;
            case "theater0":
              break;
            case "outpost0":
              break;
            case "metadata":
              res.json(fabricateResponse([], profileId));
              break;

            default:
              res.json(
                throwError(
                  "errors.com.epicgames.modules.profiles.operation_forbidden",
                  `Unable to find template configuration for profile ${req.query.profileId}`,
                  404,
                  "fortnite",
                  "prod-live",
                  [req.query.profileId]
                )
              );
              break;
          }
          // END QUERYPROFILE
          break;

        case "SetCosmeticLockerBanner":
          if (request.bannerIconTemplateName != "None") {
            profile.BannerIconTemplate = request.bannerIconTemplateName;
          }
          if (request.BannerColorTemplate != "None") {
            profile.BannerColorTemplate = request.bannerColorTemplateName;
          }

          // Save Profile
          saveProfile(path.join(profileDirectory), accountId, profile);

          // Fabricate a response
          res.json(
            fabricateResponse(createAthena(profile, accountId), profileId, rvn)
          );
          break;

        case "SetCosmeticLockerSlot":
          const item = request.itemToSlot;
          const slotIndex = request.slotIndex;
          const category = request.category;
          const variantUpdates = request.variantUpdates;

          switch (category) {
            case "Character":
            case "Backpack":
            case "Pickaxe":
            case "Glider":
            case "SkyDiveContrail":
            case "MusicPack":
            case "LoadingScreen":
              profile[category].ID = item;
              profile[category].Variants = [{ variants: variantUpdates }];

            case "Dance":
              profile[category].ID[slotIndex] = item;
              profile[category].Variants[slotIndex] = [
                { variants: variantUpdates },
              ];

            case "ItemWrap":
              if (slotIndex != -1) {
                profile[category].ID[slotIndex] = item;
                profile[category].Variants[slotIndex] = [
                  { variants: variantUpdates },
                ];
              }
              // APPLY ALL
              else {
                profile[category].ID[0] = item;
                profile[category].Variants[0] = [{ variants: variantUpdates }];
                profile[category].ID[1] = item;
                profile[category].Variants[1] = [{ variants: variantUpdates }];
                profile[category].ID[2] = item;
                profile[category].Variants[2] = [{ variants: variantUpdates }];
                profile[category].ID[3] = item;
                profile[category].Variants[3] = [{ variants: variantUpdates }];
                profile[category].ID[4] = item;
                profile[category].Variants[4] = [{ variants: variantUpdates }];
                profile[category].ID[5] = item;
                profile[category].Variants[5] = [{ variants: variantUpdates }];
                profile[category].ID[6] = item;
                profile[category].Variants[6] = [{ variants: variantUpdates }];
              }

              saveProfile(profileDirectory, accountId, profile);
              break;
          }
          let newAthena = createAthena(profile, accountId);
          res.json(fabricateResponse(newAthena, profileId, rvn));
          break;

        case "EquipBattleRoyaleCustomization":
          var slot, itemToSlot;
          switch (request.slotName) {
            case "Character":
              slot = "favorite_character";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "Backpack":
              slot = "favorite_backpack";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "Pickaxe":
              slot = "favorite_pickaxe";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "Glider":
              slot = "favorite_glider";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "SkyDiveContrail":
              slot = "favorite_skydivecontrail";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "MusicPack":
              slot = "favorite_musicpack";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "LoadingScreen":
              slot = "favorite_loadingscreen";
              profile[request.slotName].ID = request.itemToSlot;
              break;
            case "Dance":
            case "ItemWrap":
              var bIsDance = request.slotName == "Dance";
              slot = bIsDance ? "favorite_dance" : "favorite_itemwraps";
              var arr = template.stats.attributes[statName] || [];
              if (request.indexWithinSlot == -1) {
                // handle wrap "Apply To All"
                arr = [];
                for (var i = 0; i < (bIsDance ? 6 : 7); ++i) {
                  arr[i] = request.itemToSlot;
                }
              } else {
                arr[request.indexWithinSlot || 0] = request.itemToSlot;
              }
              for (var i = 0; i < arr.length; ++i) {
                if (arr[i] == null) {
                  arr[i] = "";
                }
              }
              itemToSlot = arr;
              break;
          }
          if (slot != null && itemToSlot != null) {
            saveProfile(profileDirectory, accountId, profile);
            res.json(
              fabricateResponse(
                createAthena(profile, accountId),
                profileId,
                rvn
              )
            );
            break;
          }
          saveProfile(profileDirectory, accountId, profile);
          res.json(
            fabricateResponse(
              createAthena(profile, accountId),
              profileId,
              rvn
            )
          );
          break;

        case "SetItemFavoriteStatusBatch":
          let index = 0;

          Object.keys(request.itemIds).forEach((item) => {
            if (request.itemFavStatus[index] === true) {
              let isMarked = false;
              Object.keys(profile.favorites).forEach((item) => {
                if (item.id === request.itemIds[index]) {
                  isMarked = true;
                  return;
                }
                // End Function
              });
              if (!isMarked) {
                profile.favorites.push({ id: request.itemIds[index] });
              }

              if (isMarked) {
                let index2 = 0;

                Object.keys(profile.favorites).forEach((item) => {
                  if (item.id === request.itemIds[index]) {
                    profile.favorites.splice(index2, 1);
                    return;
                  }
                  // End Function
                });
              }
              index += 1;
            }

            // End Function
          });

          saveProfile(profileDirectory, accountId, profile);
          res.json(
            fabricateResponse(createAthena(profile, accountId), profileId, rvn)
          );
          break;

        case "SetMtxPlatform":
          res.json(
            fabricateResponse(
              [
                {
                  changeType: "statModified",
                  name: "current_mtx_platform",
                  value: request.platform,
                },
              ],
              profileId,
              rvn
            )
          );
          break;

        case "VerifyRealMoneyPurchase":
          res.json(
            fabricateResponse(genCommonCore(profile, template, accountId))
          );
          break;

        default:
          res.json(
            throwError(
              "errors.com.epicgames.modules.profiles.operation_forbidden",
              `Unable to find template configuration for profile ${req.query.profileId}`,
              404,
              "fortnite",
              "prod-live",
              [req.query.profileId]
            )
          );
          break;
      }
    }
  );
};
