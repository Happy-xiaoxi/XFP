    export function u() {
      try {
        p = {
          top_bar:
            '\n  <div class="horizontalbar_truepush" id="jklm-topbar" style=" top:' +
            g.customStyles.top +
            "px; bottom:" +
            g.customStyles.bottom +
            'px; height: max-content;">\n    <div class="bar_truepush d-flex" style="background-color:' +
            g.customStyles.barColor +
            ";color:" +
            g.customStyles.textColor +
            ';">\n      <div class="optinbar_content">\n        <span class="px-2">' +
            g.customStyles.barText +
            '</span>\n        <button class="mr-1" onclick="truepush.subscribeUserByTwoWayOptIn(\'hide\')" style="background-color:' +
            g.customStyles.buttonColor +
            "; color:" +
            g.customStyles.buttonTextColor +
            ';">' +
            g.customStyles.buttonText +
            '</button>\n        <b class="px-3 py-2" onclick="truepush.HideOptin(\'close\')" >x</b>\n      </div>\n    </div>\n  </div>\n  ',
          default2:
            '\n    <div class="defaultplus_truepush" id="jklm-default2">\n      <div class="overlay-tp"></div>\n      <div class="p-rel defaultplus_box_tp">\n        <div class="defaultplus_content_tp">\n          <a href="javascript:void(0)">\n            <a href="https://www.truepush.com/?medium=Default&source=fl8nolcqc" target="_blank"> Webpush by \n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 872.6 872.6" style="enable-background:new 0 0 872.6 872.6;width: 24px;height: 24px;vertical-align: middle;" xml:space="preserve">\n            <style type="text/css">\n                .st0{fill:#E54F50;}\n                .st1{fill:#FFFFFF;}\n            </style>\n            <g>\n                <path id="logo_truepush_1_" class="st0" d="M158.4,111.9h556.8c25.2,0,45.6,20.4,45.6,45.6v556.8c0,25.2-20.4,45.6-45.6,45.6H158.4   c-25.2,0-45.6-20.4-45.6-45.6V157.5C112.8,132.3,133.2,111.9,158.4,111.9z"/>\n                <g>\n                    <g id="TruePushLogo_2_" transform="translate(120.000000, 187.000000)">\n                        <g id="Shape_20_">\n                            <path class="st1" d="M159.6,105.7c-8.1,0-15.6,3.1-21.3,8.8c-1.9,1.9-3.4,3.9-4.7,6.2c1.3-2.2,2.9-4.2,4.7-6.1      C144,108.9,151.5,105.8,159.6,105.7l72.8,0.1c0,0,0-0.1,0-0.1H159.6z M251.7,100c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.3,0.7-0.5,1      l0,0c-2.5,5.1-4,10.3-4.6,15.7c0.6-5.3,2.2-10.6,4.7-15.7L251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>\n                        </g>\n                        <g id="Shape_9_">\n                            <path class="st1" d="M159.6,105.7c-8.1,0-15.6,3.1-21.3,8.8c-1.9,1.9-3.4,3.9-4.7,6.2c1.3-2.2,2.9-4.2,4.7-6.1      C144,108.9,151.5,105.8,159.6,105.7l72.8,0.1c0,0,0-0.1,0-0.1H159.6z M251.7,100c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.3,0.7-0.5,1      l0,0c-2.5,5.1-4,10.3-4.6,15.7c0.6-5.3,2.2-10.6,4.7-15.7L251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>\n                        </g>\n                        <g id="Shape_8_">\n                            <polygon class="st1" points="402,165.3 401.9,143.7 402,143.7     "/>\n                            <polygon class="st1" points="364,135.8 363,213.6 363.9,135.8     "/>\n                        </g>\n                        <g id="Shape_7_">\n                            <path class="st1" d="M280,73.9c1.1-0.5,2.2-1,3.3-1.5C282.2,72.8,281,73.3,280,73.9z M159.6,89.7c-12.3,0-23.9,4.8-32.6,13.5      c-2.7,2.7-5,5.7-6.9,9c1.9-3.2,4.3-6.2,7-8.9C135.7,94.5,147.2,89.8,159.6,89.7l79.6,0.1c0,0,0-0.1,0.1-0.1H159.6z"/>\n                        </g>\n                        <g id="Shape_5_">\n                            <path class="st1" d="M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z       M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z       M241.4,86.2c1.5-2.3,3.2-4.5,5-6.5C244.6,81.7,243,83.9,241.4,86.2z M246.5,79.6c1.1-1.3,2.3-2.6,3.5-3.8      C248.8,77.1,247.6,78.3,246.5,79.6z M250,75.8c1.2-1.2,2.5-2.4,3.8-3.6C252.5,73.4,251.2,74.6,250,75.8z M262.2,65.8      c-0.5,0.4-1.1,0.7-1.6,1.1C261.1,66.5,261.6,66.1,262.2,65.8L262.2,65.8z M251.7,100c0,0.1-0.1,0.2-0.1,0.2      C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100C251.8,100,251.8,100,251.7,100z M232.4,105.8      c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z M288.1,127.3L288.1,127.3l0-1.1L288.1,127.3z       M386,165.6L386,165.6l0,7.9L386,165.6z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8      L232.4,105.8z M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>\n                        </g>\n                        <g id="Shape_4_">\n                            <polygon class="st1" points="272.2,126 272.2,135.6 272.1,135.6 272.1,127.3     "/>\n                            <polygon class="st1" points="386.1,173.5 386,165.6 386,165.6     "/>\n                        </g>\n                        <g id="Shape_1_">\n                            <rect x="159.9" y="127.3" class="st1" width="51.5" height="16.4"/>\n                        </g>\n                        <g id="Shape_2_">\n                            <path class="st1" d="M472.9,49.8H160.7c-23,0-44.8,9-61.1,25.2C83.1,91,74.1,112.6,74.1,135.7c0,47.3,38.8,85.8,86.6,85.8h69.9      l0.6,154.8c0.2,39.6,38.7,71.8,85.9,71.8h0.2c47.3-0.2,85.7-32.7,85.6-72.4l-0.6-154.1h70.6c47.8,0,86.6-38.5,86.6-85.8      C559.5,88.3,520.6,49.8,472.9,49.8z M160.7,205.5c-38.9,0-70.6-31.3-70.6-69.8c0-18.7,7.3-36.2,20.7-49.3      c13.4-13.3,31.1-20.6,49.9-20.6h101.5c-0.5,0.4-1.1,0.7-1.6,1.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-0.6,0.4-1.1,0.8-1.7,1.2      c-0.6,0.4-1.1,0.9-1.7,1.3c-0.5,0.4-1.1,0.8-1.6,1.3c-0.6,0.5-1.1,0.9-1.7,1.4c-1.3,1.2-2.6,2.4-3.8,3.6      c-1.2,1.2-2.4,2.5-3.5,3.8c-1.8,2.1-3.5,4.3-5,6.5c-0.4,0.6-0.8,1.1-1.1,1.7c0,0-0.1,0.1-0.1,0.2c-0.3,0.5-0.7,1.1-1,1.6      c0,0,0,0.1-0.1,0.1h-79.6c-12.3,0-23.9,4.8-32.6,13.4c-2.7,2.7-5,5.7-7,8.9c-0.2,0.3-0.4,0.6-0.6,1c-0.2,0.3-0.4,0.6-0.5,1      c0,0,0,0,0,0c-0.3,0.5-0.5,1-0.8,1.5c-0.1,0.2-0.2,0.3-0.2,0.5c-0.1,0.3-0.3,0.5-0.4,0.8c0,0.1-0.1,0.2-0.1,0.3      c-0.2,0.5-0.4,1-0.6,1.4c-0.2,0.5-0.4,1.1-0.6,1.7c0,0,0,0,0,0c-0.1,0.3-0.2,0.7-0.3,1c-0.1,0.3-0.2,0.7-0.3,1      c0,0.1,0,0.1-0.1,0.2c-0.2,0.7-0.4,1.3-0.6,2c-0.1,0.4-0.2,0.8-0.3,1.1c-0.1,0.4-0.2,0.7-0.2,1.1c-0.1,0.7-0.3,1.5-0.4,2.2      c-0.1,0.8-0.2,1.5-0.3,2.3c-0.1,0.8-0.1,1.5-0.2,2.3c0,0.8-0.1,1.5-0.1,2.3c0,25.3,20.6,45.9,46,45.9h149.2v23.9H160.7z       M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1c-0.1,0.9-0.2,1.8-0.3,2.7c0,0.5-0.1,1-0.1,1.6c0,0.7-0.1,1.4-0.1,2.1c0,0.7,0,1.3,0,2      l0,5.1l0.1,8.4l0.1,29.9h-70.8c-16.5,0-30-13.4-30-29.9c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3      c0-0.4,0-0.9,0.1-1.3c0-0.4,0.1-0.7,0.1-1.1c0,0,0,0,0-0.1c0-0.3,0.1-0.6,0.1-0.9c0-0.1,0-0.2,0-0.3c0-0.3,0.1-0.6,0.2-0.9      c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.2-0.7c0-0.1,0.1-0.3,0.1-0.4c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.2,0.1-0.4,0.2-0.6      c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.3-0.9,0.5-1.3c0,0,0-0.1,0-0.1c0.2-0.4,0.4-0.9,0.6-1.3c0.2-0.4,0.4-0.9,0.7-1.3      c0,0,0,0,0,0c0.2-0.3,0.3-0.6,0.5-1c1.3-2.2,2.8-4.3,4.7-6.2c5.6-5.7,13.2-8.8,21.3-8.8L232.4,105.8      C232.4,105.7,232.4,105.7,232.4,105.8L232.4,105.8z M401.9,143.7h68.9v-16.4h-85l0.3,54.3h0l0.2,31.9l0.6,162.1      c0.1,30.9-31.2,56.2-69.6,56.4H317c-38.4,0-69.7-25-69.9-55.8l-0.6-154.7h24.3l-2,144.1c-0.1,8.4,3.4,16.7,9.8,23.3      c8.7,8.9,21.7,14,35.7,14.1c0.3,0,0.6,0,0.9,0c0.6,0,1.2,0,1.8,0h0.1c0.4,0,0.9,0,1.3-0.1c0.5,0,0.9,0,1.4-0.1      c0.2,0,0.5,0,0.7-0.1c0.6,0,1.2-0.1,1.8-0.2c0.1,0,0.2,0,0.3,0c0.5-0.1,0.9-0.1,1.4-0.2c1.4-0.2,2.9-0.5,4.3-0.8      c0.3,0,0.5-0.1,0.7-0.2c0,0,0,0,0.1,0c0.4-0.1,0.9-0.2,1.3-0.4c0.7-0.2,1.5-0.4,2.2-0.6c0.4-0.1,0.8-0.3,1.1-0.4      s0.7-0.3,1.1-0.4c0.8-0.3,1.5-0.6,2.3-0.9c0.5-0.2,0.9-0.4,1.4-0.6c0.2-0.1,0.4-0.2,0.6-0.3s0.4-0.2,0.6-0.3      c0.3-0.1,0.5-0.2,0.7-0.4c0.5-0.3,1-0.5,1.6-0.8c0.5-0.3,1-0.6,1.5-0.9c1.2-0.8,2.4-1.6,3.6-2.5c0.2-0.2,0.5-0.4,0.7-0.5      c0.5-0.4,0.9-0.7,1.3-1.1c0.6-0.5,1.1-1,1.7-1.5c6.6-6.4,10.2-14.5,10.4-22.9l2.1-153.2l0.9-77.8l0.1-8.5h-16l-1,86l-2.1,153.2      c-0.1,5.3-3,9.2-5.5,11.7c-5.8,5.6-15,8.9-24.8,8.7c-9.7-0.1-18.8-3.6-24.4-9.3c-2.4-2.5-5.3-6.6-5.3-11.9l2-144.3h21.9v135.8      h16V213.5l0-86.2h-16l0,38.3h-21l0.4-29.8v-8.5h0l0-1.1c0-0.7,0.1-1.4,0.2-2.1c0-0.2,0.1-0.5,0.1-0.7      c1.5-7.4,8.8-13.6,18.4-16.3c0.6-0.2,1.2-0.3,1.8-0.5c0.2,0,0.4-0.1,0.6-0.1c0.8-0.2,1.5-0.3,2.3-0.4c2-0.3,4-0.5,6.1-0.5h156.3      c16.5,0,30,13.5,30,30c0,16.5-13.5,29.9-30,29.9h-72v-0.3L401.9,143.7z M386.1,173.5l0-7.9h0L386.1,173.5z M472.9,205.5h-70.6      l-0.1-23.9h72c25.4,0,46-20.6,46-45.9c0-25.4-20.6-46-46-46H317.8c-13.8,0-26.1,4.8-34.4,12.4c-0.2,0.2-0.5,0.4-0.7,0.7      c-3.9,3.8-6.9,8.3-8.7,13.2c-0.1,0.3-0.2,0.6-0.3,0.9c-1,2.9-1.5,6-1.5,9.2v9.6l-0.4,30h-25.4l-0.1-30l-0.1-8.3l0-5.1      c0-0.9,0-1.7,0.1-2.6c0-0.4,0-0.9,0.1-1.3c0-0.4,0.1-0.9,0.1-1.3c0.6-5.3,2.2-10.6,4.6-15.7l0,0c0.2-0.3,0.3-0.7,0.5-1      c0-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0v0c0,0,0,0,0,0s0,0,0,0      c0,0,0,0,0-0.1c0.3-0.5,0.5-0.9,0.8-1.4c0-0.1,0.1-0.1,0.1-0.2c0.3-0.4,0.5-0.8,0.8-1.3c0.7-1.1,1.4-2.2,2.2-3.2      c0.2-0.3,0.4-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9v0c0.2-0.3,0.5-0.6,0.8-0.8      c0.3-0.3,0.5-0.6,0.8-0.8c0.5-0.6,1-1.1,1.6-1.6c0.3-0.3,0.5-0.5,0.8-0.8c0.6-0.5,1.1-1.1,1.7-1.6h0c0.6-0.5,1.2-1,1.8-1.5      c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.2,0.6-0.5,1-0.7c0.6-0.5,1.3-0.9,2-1.3      c0.7-0.4,1.3-0.9,2-1.3c0.4-0.2,0.8-0.5,1.2-0.7c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.7-0.4,1-0.5c0.7-0.4,1.4-0.8,2.1-1.1      c0.4-0.2,0.7-0.4,1.1-0.5c1.1-0.5,2.2-1,3.3-1.5c0.8-0.3,1.5-0.6,2.3-0.9c0.4-0.2,0.8-0.3,1.2-0.4c0,0,0.1,0,0.1,0      c0.3-0.1,0.6-0.2,0.9-0.3c0.1,0,0.1,0,0.2-0.1c0.4-0.1,0.8-0.3,1.2-0.4c0.4-0.1,0.8-0.3,1.2-0.4c0.8-0.3,1.6-0.5,2.4-0.7      c0.4-0.1,0.8-0.2,1.2-0.3c0.8-0.2,1.6-0.4,2.5-0.6c0.4-0.1,0.8-0.2,1.2-0.3c0.4-0.1,0.8-0.2,1.3-0.3c0.3-0.1,0.6-0.1,0.9-0.2      c0.5-0.1,1.1-0.2,1.6-0.3c0.4-0.1,0.9-0.2,1.3-0.2c0.6-0.1,1.1-0.2,1.7-0.3c0.3,0,0.5-0.1,0.8-0.1c0.5-0.1,0.9-0.1,1.4-0.2      c0.9-0.1,1.7-0.2,2.6-0.3c0.5,0,1.1-0.1,1.7-0.1c0.3,0,0.7,0,1-0.1c0.8,0,1.7-0.1,2.5-0.1c0.5,0,0.9,0,1.3,0h157.2      c38.9,0,70.6,31.4,70.6,69.9C543.5,174.1,511.8,205.5,472.9,205.5z"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            </svg>\n              <span> Truepush</span>\n            </a>\n          </a>\n        </div>\n      </div>\n    </div>\n    ',
          bell:
            ' \n    <div class="belloptin_truepush" onclick="truepush.subscribeUserByTwoWayOptIn()">\n      <div class="bellcircle_optinicon"  style="background-color:' +
            g.customStyles.circleColor +
            '">\n        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 58.59 58.59">\n          <path d="M43.88,41.21a14.1,14.1,0,0,1-2.38-7.86v-8A12.21,12.21,0,0,0,30.72,13.26v-3H27.79v3A12.32,12.32,0,0,0,17.09,25.5v7.85a14.18,14.18,0,0,1-2.38,7.86l-2.8,4.2H25.15a4.4,4.4,0,0,0,8.29,0H46.68Zm-26.5,1.27A17,17,0,0,0,20,33.35V25.5a9.35,9.35,0,0,1,9.24-9.39h0a9.29,9.29,0,0,1,9.28,9.28v8a17,17,0,0,0,2.64,9.13Z" style="fill:' +
            g.customStyles.bellColor +
            '" />\n          <path d="M50.15,19.28l-2.07,2.07a11.25,11.25,0,0,1,.12,15.76l2.1,2a14.17,14.17,0,0,0-.15-19.87Z" style="fill:' +
            g.customStyles.bellColor +
            '" />\n          <path d="M46,23.42,43.93,25.5a5.35,5.35,0,0,1,0,7.55l2.1,2.05A8.32,8.32,0,0,0,46,23.42Z" style="fill:' +
            g.customStyles.bellColor +
            '" />\n          <path d="M10.51,21.35,8.44,19.28a14.15,14.15,0,0,0-.15,19.87l2.1-2a11.23,11.23,0,0,1,.12-15.76Z" style="fill:' +
            g.customStyles.bellColor +
            '" />\n          <path d="M14.66,25.5l-2.08-2.08a8.31,8.31,0,0,0-.06,11.68l2.09-2.05a5.37,5.37,0,0,1-1.53-3.76A5.3,5.3,0,0,1,14.66,25.5Z" style="fill:' +
            g.customStyles.bellColor +
            '" />\n        </svg>\n        <span class="tip-content">Subscribe to notifications </span>\n      </div>\n    </div>\n    ',
          box:
            '\n    <div class="optinbox_truepush optinbox_truepush_iframe">\n      <div class="d-flex optinbox_tpsection">\n        <div>\n          <h5 style="display:' +
            (g.customStyles.visibleStatus ? "none" : "block") +
            ' !important">' +
            g.customStyles.mainText +
            '</h5>\n          <h5 style="display:' +
            (g.customStyles.visibleStatus ? "block" : "none") +
            ' !important">Allow updates from ' +
            g.websiteURL +
            "</h5>\n          <p>" +
            g.customStyles.subText +
            '</p>\n          <div class="optinbox_tpbuttons">\n            <button type="button" onclick="truepush.HideOptin(\'close\')" class="tp_btn_default">' +
            g.customStyles.firstBtnText +
            '</button>\n            <button type="button" onclick="truepush.subscribeUserByTwoWayOptIn(\'hide\')" class="tp_btn_primary">' +
            g.customStyles.secondBtnText +
            '</button>\n            <div class="text-center mt-1">\n              <a href="https://www.truepush.com/?medium=box&source=hco3ib00z" target="_blank" >Powered by Truepush</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    ',
          box2:
            '\n    <div class="optinbox_truepush optinbox_plus_truepush optinboxplus_truepush_iframe">\n            <div class="optinbox_plus_tpsection">\n                <div class="optinbox_plus_media d-flex">\n                    <div class="optinbox_plus_image">\n                        <img src="' +
            cdnUrl +
            "website_icons/" +
            g.websiteIcon +
            '" alt="">\n                    </div>\n                    <div class="optinbox_plus_media_body">\n                      <p style="display:' +
            (g.customStyles.visibleStatus ? "none" : "block") +
            ' !important">' +
            g.customStyles.mainText +
            ' </p>\n                      <p style="display:' +
            (g.customStyles.visibleStatus ? "block" : "none") +
            ' !important">Allow updates from ' +
            g.websiteURL +
            ' </p>\n                      <p class="subtext">' +
            (g.customStyles.subText ? g.customStyles.subText : "") +
            '</p>\n                      </div>\n                </div>\n                <div class="optinbox_tpbuttons mt-2 mb-1">\n                    <button type="button" onclick="truepush.HideOptin(\'close\')" class="tp_btn_default">' +
            g.customStyles.firstBtnText +
            '</button>\n                    <button type="button" class="tp_btn_primary" onclick="truepush.subscribeUserByTwoWayOptIn(\'hide\')">' +
            g.customStyles.secondBtnText +
            '</button>\n                    <div class="text-center mt-2">\n                        <a href="https://www.truepush.com/?medium=box+&source=jm0dlua52" target="_blank">Powered by Truepush</a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        ',
          default:
            '\n    <button onclick="truepush.HideOptin()">×</button> \n    <p>Notifications by</p>\n    <a href="https://www.truepush.com?medium=default&source=rh5bpz549" target="_blank">TruePush</a>\n    ',
        };
      } catch (t) {
        console.log(t);
      }
      var t = document.createElement("div"),
        o = "";
      !g.websiteSSL &&
        browserData &&
        browserData.browser &&
        "Safari" != browserData.browser.name &&
        (o = " iframe_optin_notifications");
      try {
        t.innerHTML =
          '\n<div class="truepush_optin_notifications' + o + '">\n\n</div>\n';
      } catch (t) {
        console.log("error is ", t);
      }
      return document.body.appendChild(t);
    }