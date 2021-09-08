<!-- # Dynamite Core Backend **Beta** -->

<!-- ![Screenshot 2021-05-10 145346](https://user-images.githubusercontent.com/34188635/117723405-93a65500-b19f-11eb-8ac2-02061bb79e3e.png) -->
<!--- ![image](https://user-images.githubusercontent.com/34188635/121742774-8b527a00-cabd-11eb-8739-405db566fa45.png) -->

<div align="center">
  <img alt="banner" src="https://trail-blaze.github.io/res/Blaze/Dynamite-Full-Full.png" width=50%/>
  <h1>Trailblaze Backend, the core of Blaze.</h1>

<p style="display: inline-block">
<img alt="info" src="https://img.shields.io/github/v/release/trail-blaze/dyna-core-beta?style=for-the-badge&color=red&include_prereleases&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAAHzZY3hAAACtUlEQVQ4y32TS0iUYRSGn+/7dXTQRkvzEoRXEsxLRRFB0MZFIS0KLSJHzJ2LVpGXVtpCxy4EraNCW6RFEQRBtYmiwEVoajdJndRGnbyPznj5PS1+Uwd/PLvvvO855z3fOQcAuVGRAoCcjhUtdyriCQZYNyVXTgjRO9B0vYPQvOWW9lJDqg6JRWl2d/OmNQ+AzHzsTerPiHjKjwMoAClCyDoA2QWFWs4mCAC/OmHF7NJkFGxSoUMqPFe9ZqnDJDY5SV174AfQ62BDySKjL0x+dMCU95543P2Wzqayk4wNvmJsAPwjFlsbkFUIafuXNegqvndsgACrJkz6QCTSkt1YnoAy//L1E0REQs4RQPep2pZ9W5v2uJ9ufkeEg+UvWVwo3uzb6KLZ/ZjfPcUsBZFbFxLDCFJf6sD77TxDfWCuwEzgvty9HLVRwuFMx9cPwTnwD4Mj6jQx8QuAoaShJMjkn2h6P24UzsiDpHSIS8iOYHo8HAQY7IVIB7h2tmqinDYDFmuygksTnzSMUuGEKCfszQVRbrXWfxuj/efwD0FyBiTtBW0cVNUPOxXbmDRX7kCW3wM5qrbVacfRtoGCEk/ZbebGZvH2FhIMREuz+7Add4sCaXI3Epqtwz8C5rJ1DHuywZVyCmUWoAipmta7tgmk8dJuprzjBKZh3AszExDjgswCMCLBXBGS0xVKbqqaR9Xhu9BeamCYJ5jwQd9nKxhgaRF8gzDyE0LziuHvsCpXxVPeZm28p+wJE74SAlNWgH8Ipv32v+pKgOQ0cDghNRPgegSoNFZNGOiGlWW2tdkJiI6BuEQwTTCMMo3iObtSsd0Y++FaCQwDoHttUS7mg37N1FgKPR9gcWFrXEwc5B6DuN0AAUSdUXUtb7eOsdF9FINKhCIgce1kfCBfQD8jFGxX9U+W/vP/ARC6EVMCUiKjAAAAAElFTkSuQmCC" />

<img alt="Downloads" src="https://img.shields.io/github/downloads/trail-blaze/dyna-core-beta/total?color=darkgreen&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAFoTx1HAAABAklEQVQoz42STU7DMBCF30yKuEUTIW7AOai7ZEcTllwJDAdAatKKyyCEUnEPPxaJ7Tj2gpG88Px8M/PsiiR+796pAEAH4HBsSBLS9jUBACRxOG7ZDluShALA2/4i0CuEjO5Ux6g3afuaojOaJDxEyIneDQ1lLnq9HwVAZPgkusgMQREJzm64IYCIfTo3swN42a2w3hw3OXbduzhQtmS46JxEgTWjqDWj0LmkwpppoDDt47lhRcLuLmEnWfdq+5paSTqk28Ca78SZbfJfKxYupacrFyYKRC/DE3lF8pTFL0gCuuooBNw17P5LiuJ4wFJ/QGHNj2TPWjrPn7d8+Jj+fun8AW+Jt/dN5HJHAAAAAElFTkSuQmCC" />

<img alt="Stars" src="https://img.shields.io/github/stars/trail-blaze/dyna-core-beta?style=for-the-badge&color=yellow&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAFmJr+7AAACpUlEQVRIx62UvWsUURTFf3d2NivKzsomNilMYRox2rxGRME0imJhxE8U7AUFFQsRbGxEJba2NjEgWoj6L6TZB0nQkDJR0UKi2SEgcWbftdiZzezu7CaiF4aZefe8+3HueU9UldR8tcFB4BngRFVRGzTdqoqrlferKp7a4B4wrza4m3o0juMmLH1crayqShRFpMEmgZutfBT8LPpJ8naq2tyRZx7A+vo6aoNlZsdwzgEgrlY+D5wEribgF8B0eyeJiQnFS75/tFZNXVo5gKqYUMAbwFaWgfyq1FZ2gP4UEw7kVptWnNmyBhTVBm8BGo3GRl1JsUvACJvbaFtJaoM7wKNOVLOPjpKStFnwVCbQxEbUjRkdc7UhyU4547udftMDcCBvXVU3Supgwzap7SECoCkuEZgdA/BBFwDiOKZN2inY931EBG18epP4dudlEFcrn0hmMArsAU5n/F+BRWAe+AgsiKuVR4ClLQztm5hw2BMTLkPJ2wQ8JSYc7hJfp54TeyAmvN/FUhzHvaJfi6Kom9bCXPVMniyAQd/3uzcATwEH3oCY8HIiuEmgOZ8cLd3KlYndJa5WPp7+97wH8kxtMA2omPDSVvf0pD+KoraTqTa4DlwALqoNbnTi4zjOJbqrgziOcc5RLBZb3CQ370zH3kNiwhlVbV1yqorneXiel5+g0WjgeV4b6WorZdDVnG4dSBWzWhekyXd2WJmzcBR4B2zn/9ov4FSrA7WVbaDvgfF/DFwDGRdTX+tzbwdXgOf9RJBjd8XUH4L0H3ImyWtgYovBX4kJz6ZzLBQK/VVUmBusgq78JTVDv8e+rxSLxTYV9aBAJzsWvgBHxISSHPHDwOcOzONSqdQWPLcDtZVKIssPwDkx4eImp3sv8BLYB7JTTL2e9f8B1jOzekMmlTMAAAAASUVORK5CYII=" />
<p />
  </div>
<hr/>


## To Run
### On First Run:
- Do the usual `npm install` to install all the necessary libraries needed in order to run the program
- Use `npm start`, `launch.bat`, or `node app.js` in order to run the script
- <**NEW**> If you would like to run the service invisibly, run the shortcut named `StartMainServiceModule`

## To Build [ WIP Might Not Work ]:
- `npm install -g pkg`
- `pkg app.js --assets "public/**/*" --scripts "modules/**/*.js", "lib/**/*.js"`

# ❤️ Like, ⭐ Star, 🍴 Fork!

Feel free to edit, tinker or rebrand as you like or use in any of your projects! Be inspired! We love seeing new people putting their own spin on our backend!

