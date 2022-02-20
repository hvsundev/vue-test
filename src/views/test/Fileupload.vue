<template>
  <div class="inner">
    <p class="test-title">File Upload</p>
    <form class="file-form" enctype="multipart/form-data" @submit.prevent="submit">
      <div class="playground-file-upload">
        <div class="file-btn-wrap row">
          <input class="file-input" value="파일 업로드하기" placeholder="파일 업로드하기">
          <label class="upload" for="file-form" >🧸💜</label>
          <input class="upload" multiple="multiple" type="file" id="file-form" @change="handleUpload">
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
        <div class="submit-btn-wrap row">
          <button type="button">취소</button>
          <button type="submit" class="submit-btn" style="margin-left: 6px;">전송하기</button>
        </div>
        <div v-if="false">
          <ul>
            <li v-for="(item, index) in fileList">
              [{{ index+1 }}] {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import common from "@/utils/common";

export default {
  name: "FileUpload",
  mixins: [common],
  data() {
    return {
      fileList: [],
      fileAllowSize: 0,
      fileTotalSize: 0,
      defaultFileAllowSize: 1000000,

      isDragged: false,
    };
  },
  created() {
    this.fileAllowSize = this.defaultFileAllowSize
  },
  methods: {
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
      let data = new FormData();
      this.fileList.forEach((obj, idx) => {
        data.append("files", obj);
      })

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
  },
};
</script>

<style lang="scss">
// 버튼이 없을 때의 해결책
// #drop * { pointer-events: none; }

.left-bar {
  margin: 0 6px;
  width: 1px;
  display: inline-block;
  height: 12px;
  background-color: black;
}

.playground-file-upload {
  width: 410px;

  .file-btn-wrap {
    padding-left: 16px;
    border-radius: 5px;
    background-color: #fff;
    height: 50px;
    border: 1px solid lightgrey;
    justify-content: space-between;
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
      border: none;
      color: #999999;
      outline: none;
    }

    .upload {
      background-color: #e5e5e5;
      height: 100%;
      width: 88px;
      font-size: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;

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
    margin-top: 5px;

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

  .submit-btn-wrap {
    margin-top: 20px;

    button {
      width: 30%;
      background-color: #fff;
      height: 38px;
      border-radius: 5px;
      font-weight: bold;
    }

    .submit-btn {
      width: 70%;
      background-color: #525252;
      color: white;
    }
  }
}

</style>