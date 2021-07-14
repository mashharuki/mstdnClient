/**
 * 発言するためのファイルです。
 */

// 必要なモジュールを読み込む
 const Mastodon = require('mastodon-api')
 const fs = require('fs')
 const path = require('path')
 const instanceUri = 'https://pawoo.net'
 
 // ファイルからアクセストークン情報を読み込む
 const token = fs.readFileSync(path.join(__dirname, 'token.json'))
 
 // マストドンのAPIクライアントを作成
 const M = new Mastodon({
   access_token: token,
   timeout_ms: 60 * 1000, 
   api_url: instanceUri + '/api/v1/'
 })
 
 // 発言(Toot)する 
 M.post('statuses', 
   // 発言する内容
   {status: 'TEST TEST TEST by cli'},
   // エラーの場合の処理
   (err, data, res) => {
     if (err) {
       console.error(err)
       return
     }
     console.log(res)
   })
 
 