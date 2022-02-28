<template>
<div class="inner" style="margin: 0 400px">
  <p class="test-title">Text Editor</p>
  <div class="editor-wrap">
    <div class="header">
      <input class="editor-title" v-model="title" type="text" placeholder="제목을 입력하세요." />
    </div>
    <div class="content-editor">
      <VueEditor
        v-model="content"
        :editorToolbar="customToolbar"
        @blur="handleBlur"
        @focus="handleFocus"
        @image-added="handleImageAdded"
        @image-removed="handleImageRemoved" />
    </div>
    <form class="file-form" enctype="multipart/form-data" @submit.prevent="submit">
    <div class="content-file">
        <div class="playground-file-upload">
          <div class="file-btn-wrap row">
            <label class="upload" for="file-form" >
              🧸💜
            </label>
            <input class="upload" multiple="multiple" type="file" id="file-form" @change="handleUpload">
          </div>
          <div class="info row">
            <p class="row">
              <span class="delete-all" @click="handleClickDeleteAll">모두 삭제</span>
              <span class="left-bar" />
              <span class="active">{{ this.fileList.length }}개 업로드완료</span>
            </p>
            <p class="row" style="margin-left: auto">
              <span class="active">{{ fileTotalSize !== 0 ? byteCalculation(fileTotalSize) : 0 }}</span>
              <span class="left-bar" />{{ byteCalculation(fileAllowSize-fileTotalSize) }} 가능
            </p>
          </div>
          <div id="drop" class="file-box-wrap"
               :class="isDragged ? 'dragged' : ''"
               @drop.prevent="onDrop"
               @dragover.prevent
               @dragleave.prevent="onLeave"
               @dragenter.prevent="onEnter"
          >
            <ul>
              <li v-for="(file, idx) in fileList" :key="idx" class="row">
                <div class="delete" @click="handleClickDeleteFile(idx)">×</div>
                <p class="name">{{ file.name }}</p>
                <p class="size">{{ returnFileSize(file.size) }}</p>
              </li>
            </ul>
          </div>
          <div v-if="false">
            <ul>
              <li v-for="(item, index) in fileList">
                [{{ index+1 }}] {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div class="footer row">
      <button type="button">취소</button>
      <button type="submit" class="submit-btn" style="margin-left: 6px;">전송하기</button>
    </div>
  </form>
  </div>
</div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "TextEditor",
  components: { VueEditor },
  data() {
    return {
      title: '',
      content: '',
      // 상단 Toolbar 커스텀 하기
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
        [{ color: [] }, { background: [] }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
      ],

      fileList: [],
      fileAllowSize: 0,
      fileTotalSize: 0,
      defaultFileAllowSize: 1000000,

      isDragged: false,
      counter: 0
    };
  },
  created() {
    this.fileAllowSize = this.defaultFileAllowSize
  },
  methods: {
    // 게시판
    handleBlur() {

    },
    handleFocus() {

    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      let formData = new FormData();
      formData.append("image", file);
    },
    handleImageRemoved() {

    },

    // 파일업로드
    async handleUpload(e) {
      let files = e.target.files
      const rawFile = files[0]
      if (!rawFile) {
        return
      }

      // file Reader
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])

      files = Object.values(e.target.files)
      await files.forEach((file) => {
        this.fileList.push(file)
        this.fileTotalSize += Number(file.size)
      })
      e.target.value = '' // @change를 위해 기존 값 삭제
    },
    byteCalculation(bytes) {
      let byte = parseInt(bytes);
      let s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
      let e = Math.floor(Math.log(byte) / Math.log(1024));
      return ( byte / Math.pow(1024, Math.floor(e))).toFixed(2) + s[e];
    },
    returnFileSize(bytes) {
      if(bytes < 1024) {
        return bytes + 'bytes';
      } else if(bytes >= 1024 && bytes < 1048576) {
        return (bytes / 1024).toFixed(1) + 'KB';
      } else if(bytes >= 1048576) {
        return (bytes / 1048576).toFixed(1) + 'MB';
      }
    },
    handleClickDeleteFile(idx) {
      this.fileTotalSize = this.fileTotalSize - this.fileList[idx].size
      this.fileList.splice(idx, 1)
    },
    handleClickDeleteAll() {
      this.fileList = []
      this.fileAllowSize = this.defaultFileAllowSize
      this.fileTotalSize = 0
    },
    submit() {
      console.log("submit");

      let data = new FormData();

      this.fileList.forEach((obj, idx) => {
        data.append("files", obj);
      })

      data.append("title", this.title)
      data.append("content", this.content)

      for (let file of data.entries()) {
        console.log(file[0], ' / ', file[1]);
      }
    },
    onEnter() {
      this.isDragged = true
    },
    onLeave() {
      this.isDragged = false
    },
    onDrop(e) {
      this.isDragged = false
      const files = e.dataTransfer.files[0]
      this.fileList.push(files)
      this.fileTotalSize += Number(files.size)
    }
  }
};
</script>

<style lang="scss">
.inner {
  min-width: 700px;

  .editor-wrap {
    .header {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e1e1e1;

      .editor-title {
        width: calc(100% - 40px);
        height: 50px;
        outline: none;
        border-radius: 5px;
        font-size: 16px;
        padding: 0 20px;
        border: 1px solid #e2e2e2;

        &:focus {
          border: 1px solid #8832bd;
        }
      }
    }

    .content-editor {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e1e1e1;

      .quillWrapper {
        border-radius: 5px;
        background-color: white;

        .ql-editor {
          font-size: 16px;
          height: 300px;
          max-height: 300px;
        }
      }
    }

    .content-file {
      margin-bottom: 20px;

      .left-bar {
        margin: 0 6px;
        width: 1px;
        display: inline-block;
        height: 12px;
        background-color: black;
      }

      .playground-file-upload {
        .file-btn-wrap {
          height: 42px;
          letter-spacing: -0.5px;

          input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }

          .file-input {
            display: none;
          }

          .upload {
            padding: 0 13px;
            background-color: #e5e5e5;
            border: 1px solid lightgrey;
            height: 100%;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            border-radius: 5px;

            span {
              font-size: 16px;
              margin-right: 6px;
            }

            &:hover {
              background-color: #ead8fd;
              cursor: pointer;
            }
          }
        }

        .info {
          justify-content: space-between;
          margin-top: 15px;
          font-size: 13px;

          .active {
            color: #8832bd;
          }

          .delete-all {
            cursor: pointer;
          }
        }

        .file-box-wrap {
          background-color: #fff;
          border: 1px solid lightgrey;
          height: 200px;
          padding: 16px;
          overflow-y: scroll;
          margin-top: 10px;

          &.dragged {
            background-color: #ede6ff;
            border: 1px solid #a75cb9;
          }

          li {
            padding: 5px 0;

            .delete {
              margin-right: 10px;
              color: #c32ffe;
              cursor: pointer;
            }

            .name {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-right: 15px;
            }

            .size {
              margin-left: auto;
              color: #adadad;
            }
          }
        }
      }
    }

    .footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      button {
        width: 10%;
        background-color: #fff;
        height: 50px;
        border-radius: 5px;
        font-weight: bold;
      }

      .submit-btn {
        width: 20%;
        background-color: #525252;
        color: white;
      }
    }
  }
}
</style>