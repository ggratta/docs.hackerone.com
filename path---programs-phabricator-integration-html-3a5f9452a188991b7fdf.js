webpackJsonp([36912188190860],{700:function(a,t){a.exports={data:{markdownRemark:{html:'<p>You can have a two-way integration between HackerOne and Phabricator in which whenever a comment is added or there’s a state change in a Phabricator task, an internal comment is posted on the associated HackerOne report. Vice versa, any actions done on HackerOne are shown in Phabricator.  </p>\n<p>To integrate with Phabricator:</p>\n<ol>\n<li>Go to <b>Settings > Program > Integrations</b>.</li>\n<li>Click <b>Connect with Phabricator</b>.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-edfd8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 11.419249592169656%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAdUlEQVQI11WOXQrDMAyDe/9rbbvFCuvLGPnpSuPFje1ESwN7mODDAiGjKcSI+zwj5YJ1z9iIoVYhImDmP8wMrbVBrRWHKErnvFxk9KbHsuByvWHPgmdMeK3UgwYignMOIQR474dXVfxk/eE78eAc4rcP8iH4AsT7mhbSCUUpAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="phabricator-1"\n        title=""\n        src="/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-e7ffa.png"\n        srcset="/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-49813.png 125w,\n/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-dc8a5.png 250w,\n/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-e7ffa.png 500w,\n/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-dda24.png 750w,\n/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-c5f18.png 1000w,\n/static/phabricator-1-f50a5e0dd0b87a25c7e8e0128fc9e9b5-edfd8.png 1226w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="3">\n<li>Generate a conduit API token by following steps 1-2 in the <b>Generate Conduit API Token section</b>.</li>\n<li>Enter your <b>Phabricator Instance URL</b> and the <b>Generated API token</b>.</li>\n<li>Click <b>Authenticate with Phabricator</b>.</li>\n<li>Set the escalation settings by entering the default title and description in the <b>HackerOne to Phabricator Escalation settings</b> section.</li>\n<li>Select the events you want notifications for from Phabricator to HackerOne. (<i>Note: Syncing of events is only available for Professional and Enterprise customers.</i>) You can select from:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Status changed</td>\n<td>An internal comment is posted onto HackerOne when a Phabricator task changes status.</td>\n</tr>\n<tr>\n<td>Comment added</td>\n<td>An internal comment is posted onto HackerOne when a new Phabricator comment is added.</td>\n</tr>\n</tbody>\n</table>\n<ol start="8">\n<li>Select the actions you want notifications for from HackerOne to Phabricator. You can select from:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Status changed</td>\n<td>An internal comment is posted onto Phabricator when a HackerOne task changes status.</td>\n</tr>\n<tr>\n<td>Comment added</td>\n<td>An internal comment is posted onto Phabricator when a new HackerOne comment is added.</td>\n</tr>\n</tbody>\n</table>\n<ol start="9">\n<li>Click <b>Save changes</b>.</li>\n</ol>\n<p>You can now view updates to Phabricator tasks within a HackerOne report and vice versa, view updates to HackerOne reports within Phabricator.</p>\n<p>See how the integration looks in Phabricator and HackerOne below:</p>\n<ul>\n<li>\n<p>Phabricator:\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-6e0eb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 38.17934782608695%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABX0lEQVQoz2WRPU/DMBCG88cZ2JH4DUgMDAgkxIDEwghiRCx8tYK2SRrHceKP2E7Sl7PdIiiRHt2d7Nz5fS+7O73A7HUOLjpUrIZou4hUGtY59NYS7g+m7wkLRXfaTv5gnUd2dniMt+cXatKCMYamadBwDiklFKG1iiiV0MQwDBjHAd57WBoYcC4NyzpjoYk8X2OxyLHaxlDnRYWirGJelizW5bqmhhM13CSmLZTHF7oNYLwD4wLLnNEPHAWRlzXJJlnaUuwhdcoD1o3/cH5MDe+vb/H+tETDgi+GXkuRkCStkwo9eWX2CHcCSpvodcLQGUk+PzjCyeUVbh4fMP+Y4WuxxGqVoyiK6GfwZufTPsYYtHGJbVxkGJZ1sseiLTAvP1FXHHVdR4SgS0KkRfEmNheNiGeclhbOQrS08fBN00RLIcmauvrgARVhQr8lyUvyd1J/y9/lwTc/BA8HUjPgGy4SYoCXuXXIAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="phabricator-2"\n        title=""\n        src="/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-e7ffa.png"\n        srcset="/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-49813.png 125w,\n/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-dc8a5.png 250w,\n/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-e7ffa.png 500w,\n/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-dda24.png 750w,\n/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-c5f18.png 1000w,\n/static/phabricator-2-7ccb0f3d120141e6949043816ccb4bf7-6e0eb.png 1472w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>HackerOne:\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-10567.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.96710986703989%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpklEQVQoz22SyXLcMAxE9f//lrJTY0sjRfu+a7RvlDpN2kkuObzCaEiggQa1PC9wHQfWacE2zTgXyaI45hliXYHzBHhHcu87rm1TyLNtGrFPk0LwXHsaOsowgqm7cE0PnunA+dBhPz4YDcSWjSYIUZPccbFUFa6hx9X3OLoOY55jLkuMWYaDRTXgRun5iMxfSGwXEQsEuoHAchDYITI/wlQUGCVMXuoaW9tiZTxfLxYfvqCA7Fq7r0tdzh0HlR+gCUMVJS1/566LwvOQ2Y66k6pI4aeFPk0hWEgWPtntRQtUwYHK1vtPGD/e4H/qcDiu+fauYsnCXZyg4sgNrakp0sUx2igisRpbFf1X8FZLEdtKaLY0nYhtV98QXAhF/yLE15K+ueWi/sAz7fF4YKZClpQo0xJtVqDhKE2SKF7sfqVnS9Ngom87xxPjqDiY19Ouqa4wMO58Fdqra+hXCJ8bjuwAkUNMCyEXExlPlPSw5tiSnP4t3Kj49kyyU+ig4E4xwafGLQMDn0KTJqqzjh31TOr5X8c3elIVtAByfGkHfZKJ13+QY/8Gkieofpg+qp8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="phabricator-3"\n        title=""\n        src="/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-e7ffa.png"\n        srcset="/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-49813.png 125w,\n/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-dc8a5.png 250w,\n/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-e7ffa.png 500w,\n/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-dda24.png 750w,\n/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-c5f18.png 1000w,\n/static/phabricator-3-ceff9a8edb21f736069622bf0bdb8d1d-10567.png 1429w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n</ul>',frontmatter:{path:"/programs/phabricator-integration.html",id:"programs/phabricator-integration",title:"Phabricator Integration",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-phabricator-integration-html-3a5f9452a188991b7fdf.js.map