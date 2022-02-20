<template>
  <div class="new-comment" :class="this.type === 'reply' ? 'reply' : ''">
    <div v-if="this.type === 'new'">
      <textarea v-model="commentData.content" placeholder="댓글을 남겨보세요." />
      <div class="file-wrap row space-between">
        <div class="row">
          <div class="file-area row">
            <p>파일첨부</p>
            <label class="upload" for="file-form" >파일 첨부하기</label>
            <input class="upload" multiple="multiple" type="file" id="file-form" @change="handleUpload">
            <input class="file-input">
          </div>
          <p class="file-info row" v-if="this.fileList.length > 0">
            <span class="delete-all" @click="handleClickDeleteAll">모두 삭제</span>
            <span class="left-bar" />
            <span class="active">{{ this.fileList.length }}개 업로드완료</span>
          </p>
        </div>
        <p class="file-info row">
          <span class="active">{{ fileTotalSize !== 0 ? byteCalculation(fileTotalSize) : 0 }}</span>
          <span class="left-bar" />{{ byteCalculation(fileAllowSize-fileTotalSize) }} 가능
        </p>
      </div>
      <div class="file-box-wrap">
        <ul>
          <li v-for="(file, idx) in fileList" :key="idx" class="row">
            <div class="delete" @click="handleClickDeleteFile(idx)">×</div>
            <p class="name">{{ file.name }}</p>
            <p class="size">{{ byteCalculation(file.size) }}</p>
          </li>
        </ul>
      </div>
      <div class="register-btn" @click="handleSubmitAdd">댓글 등록</div>
    </div>
    <div v-if="this.type === 'modify'">
      <textarea v-model="modifyData.content" />
      <div class="file-wrap row space-between">
        <input type="file">
        <p>45MB 가능</p>
      </div>
      <div class="register-btn" @click="handleSubmitModify">댓글 수정</div>
    </div>
    <div v-if="this.type === 'reply'">
      <textarea v-model="commentData.content" />
      <div class="file-wrap row space-between">
        <input type="file">
        <p>45MB 가능</p>
      </div>
      <div class="comment-btn-wrap row">
        <div class="cancel-btn">취소</div>
        <div class="register-btn" @click="handleSubmitAdd">댓글 등록</div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/utils/common";

export default {
  name: "compNewComment",
  mixins: [common],
  props: {
    content:  {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'new',
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
    idx: {
      type: [Number, String],
      required: false,
    }
  },
  data() {
    return {
      // 파일 data
      fileList: [],
      fileAllowSize: 0,
      fileTotalSize: 0,
      defaultFileAllowSize: 1000000,

      commentData: {
        content: '',
        file: []
      },
      modifyData: {
        content: this.content,
        file: []
      },
    }
  },
  created() {
    this.getTotalSize(this.fileList)
    if(this.type === 'new') {
      this.fileAllowSize = this.defaultFileAllowSize
    } else if(this.type === 'modify') {
      this.fileList.push(this.modifyData.file)
    }
  },
  methods: {
    handleSubmitAdd() {
      let submitData = {}
      submitData.file = this.fileList
      submitData.content = this.commentData.content.replaceAll('\n', '<br>')

      this.$emit('handleSubmitAdd', submitData, this.idx, this.isFirst)
      this.fileList = []
    },
    handleSubmitModify() {
      console.log("처음 >>> ", this.idx);
      let submitData = {}
      submitData.file = this.fileList
      submitData.content = this.modifyData.content.replaceAll('\n', '<br>')
      this.$emit('handleSubmitModify', submitData, this.idx, this.isFirst)
    },
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
  }
};
</script>

<style lang="scss">
.new-comment {
  border: 1px solid #e2e2e2;

  .left-bar {
    margin: 0 6px;
    width: 1px;
    display: inline-block;
    height: 12px;
    background-color: black;
  }

  .file-wrap {
    padding: 6px 12px 3px;

    .file-area {
      p {
        font-size: 13px;
      }

      input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }

      .upload {
        cursor: pointer;
        border: 1px solid #e2e2e2;
        padding: 2px 8px;
        margin-left: 14px;
        font-size: 12px;
      }

      .file-input {
        display: none;
        padding: 3px 10px 8px;
        border-bottom: 1px solid #e2e2e2;

        p {
          color: #9a9a9a;
          font-size: 13px;
        }
      }
    }

    .file-info {
      justify-content: space-between;
      font-size: 12px;
      margin-left: 15px;
      user-select: none;

      .active {
        color: #8832bd;
      }

      .delete-all {
        cursor: pointer;
      }
    }
  }

  .file-box-wrap {
    background-color: #fff;
    margin-top: 3px;

    li {
      padding: 0px 12px;
      font-size: 12px;
      line-height: 21px;

      .delete {
        margin-right: 10px;
        color: #c32ffe;
        cursor: pointer;
      }

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: normal;
        text-decoration: underline;
      }

      .size {
        margin-left: 10px;
        color: #9a9a9a;
      }
    }
  }

  &.reply {
    margin-left: 30px;

    .comment-btn-wrap {
      justify-content: flex-end;
    }
  }

  .register-btn {
    text-align: right;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
  }

  .cancel-btn {
    text-align: right;
    padding: 8px 10px;
    cursor: pointer;
    font-weight: bold;
  }

  textarea {
    resize: none;
    width: calc(100% - 21px);
    height: 100px;
    padding: 10px;
  }
}
</style>