<template>
  <div class="inner">
    <p class="test-title">Social Login</p>
    <div>
      URL: <a href="https://yoyostudy.tistory.com/m/43" target="_blank">
        구글로그인
      </a>
      <p>현재 로그인한 사람: {{ username }}</p>
    </div>
    <div class="button-wrap">
      <button @click="GoogleLoginBtn">로그인 버튼</button>
      <button @click="checkAuth">드라이브 버튼</button>
      <div id="my-signin2" style="display: none"></div>
    </div>
  </div>
</template>

<script>
const GoogleSpreadsheet = require('google-spreadsheet')

export default {
  name: "SocialLogin",
  data() {
    return {
      username: '없음',
      client_id: '108722514340222287518',
      scopes: ['https://www.googleapis.com/auth/drive'],
      isLogined: false
    }
  },
  methods: {
    GoogleLoginBtn() {
      console.log(1);
      const self = this

      console.log(2);
      console.log(gapi);
      window.gapi.signin2.render('my-signin2', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: this.GoogleLoginSuccess,
        onfailure: this.GoogleLoginFailure,
      })

      console.log(3);
      setTimeout(function () {
        console.log('setTimeout');
        if (!self.googleLoginCheck) {
          const gauth = gapi.auth2.getAuthInstance()
          console.log(gauth);
          gauth.isSignedIn.get()
          document.querySelector('.abcRioButton').click()
        }
      }, 1500)
    },
    async GoogleLoginSuccess(googleUser) {
      console.log(googleUser);
      if (googleUser) {
        const profile = googleUser.getBasicProfile()
        console.log(profile);
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        this.username = profile.getName()
        this.getSpreadsheetList(profile)
      }
    },
    //구글 로그인 콜백함수 (실패)
    GoogleLoginFailure(error) {
      console.log(error);
    },
    getSpreadsheetList(profile) {
      // console.log('===========');
      // window.client.setApiKey('test')
      // console.log(window.gapi);
      // console.log(window.gapi.client);
      // gapi.client.load('drive', 'v3', this.listFiles);
      // console.log('===========');
      // const request = window.gapi.client.request({
      //   'path': '/drive/v2/files',
      //   'method': 'GET',
      //   'params': { 'maxResults': '1' }
      // });
      // console.log(request)
    },
    checkAuth() {
      gapi.auth.authorize(
        {
          'client_id': this.client_id,
          'scope': this.scopes.join(' '),
          'immediate': true
        }, this.handleAuthResult);
    },
    handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        this.loadDriveApi()
      } else {
        console.error("failed")
      }
    },
    loadDriveApi() {
      gapi.client.load('drive', 'v3', this.listFiles)
    },
    listFiles() {
      let request = gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"
      });

      request.execute(function(resp) {
        this.appendPre('Files:')
        let files = resp.files
        if (files && files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            let file = files[i]
            this.appendPre(file.name + ' (' + file.id + ')')
          }
        } else {
          this.appendPre('No files found.');
        }
      });
    },
    appendPre(message) {
      let pre = document.getElementById('output');
      let textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    },
  },
};
</script>

<style lang="scss">
.button-wrap {
  padding-top: 10px;
  display: flex;
}
</style>
