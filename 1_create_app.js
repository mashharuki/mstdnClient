// Web API経由でアプリをサーバーに登録する
const Mastodon = require('mastodon-api')
// モジュールを読み込む
const fs = require('fs')
const path = require('path')
// インスタンスのURL
const instanceUri = 'https://pawoo.net'
const clientName = 'MasdonCli'
const savefile = path.join(__dirname, 'cli-app.json')

// Web APIを呼びだす
Mastodon.createOAuthApp(instanceUri+'/api/v1/apps', clientName)
  .catch(err => console.error(err))
  .then(res => {
    console.log(res)
    fs.writeFileSync(savefile, JSON.stringify(res))
  })

