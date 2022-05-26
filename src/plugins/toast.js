import Vue from 'vue'

const customToast = {
  install(Vue) {
    Vue.prototype.$_toast = function (msg) {
      removeToast() // 기존에 toast <div>가 남아있다면 삭제

      let toastDiv = document.createElement('div')
      toastDiv.setAttribute('id', 'toast-wrap')

      let textEl = document.createElement('p')
      textEl.appendChild(document.createTextNode(msg))

      let cancelBtn = document.createElement('div')
      cancelBtn.addEventListener('click', removeToast)

      toastDiv.appendChild(textEl)
      toastDiv.appendChild(cancelBtn)

      document.body.appendChild(toastDiv)

      let targetToast = document.getElementById('toast-wrap')
      setTimeout(function () {
        if (targetToast !== null) {
          targetToast.remove()
        }
      }, 2000)
    }
  },
}

function removeToast() {
  let toast = document.getElementById('toast-wrap')
  if (toast !== null) {
    toast.remove()
  }
}

Vue.use(customToast)
