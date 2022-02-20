<template>
  <div class="comp-comment-wrap">
    <div class="comment" v-for="(comment, index) in commentInfo">
      <div v-if="comment.mode === 0" class="comment-area row">
        <div class="profile"></div>
        <div class="comment-info-wrap">
          <p class="name">{{ comment.name }}</p>
          <p class="content" v-html="comment.content"></p>
          <p class="datetime">{{ dateFormatter(comment.dateTime) }}</p>
          <div class="attachments row" v-if="comment.file.length > 0">
            <p>첨부파일(<span style="color: #8832bd">{{ comment.file.length }}개, {{ returnFileSize(50000) }}</span>)</p>
            <div class="allDownload">모두 저장</div>
          </div>
          <div class="footer-wrap row">
            <div>
              <div class="file" v-for="file in comment.file">
                <a :href="file.href" download>
                🔗<span class="name">{{ file.name }}</span>
                  <span class="size">{{ returnFileSize(file.size) }}</span>
                </a>
              </div>
            </div>
            <div class="row">
              <button @click="modifyComment(index, true)">수정</button>
              <span class="bar" />
              <button>삭제</button>
              <span class="bar" />
              <button @click="handleReply(index, true)">답글쓰기</button>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-area" v-else>
        <comp-new-comment
          :isFirst="true"
          :idx="index"
          :type="'modify'"
          :content="comment.content"
          @handleSubmitAdd="handleSubmitAdd"
          @handleSubmitModify="handleSubmitModify" />
      </div>
      <div v-for="reply in comment.reply">
        <div class="reply-area row" v-if="reply.mode === 0">
          <div class="profile"></div>
          <div class="comment-info-wrap">
            <p class="name">{{ reply.name }}</p>
            <p class="content" v-html="reply.content"></p>
            <p class="datetime">{{ dateFormatter(reply.dateTime) }}</p>
            <div class="attachments row" v-if="reply.file.length > 0">
              <p>첨부파일(<span style="color: #8832bd">{{ reply.file.length }}개, {{ getTotalSize(reply.file) }}</span>)
              </p>
              <div class="allDownload">모두 저장</div>
            </div>
            <div class="footer-wrap row">
              <div>
                <div class="file" v-for="file in reply.file">
                  <a :href="file.href" download>
                    🔗<span class="name">{{ file.name }}</span>
                    <span class="size">{{ returnFileSize(file.size) }}</span>
                  </a>
                </div>
              </div>
              <div class="row">
                <button>수정</button>
                <span class="bar" />
                <button>삭제</button>
                <span class="bar" />
                <button>답글쓰기</button>
              </div>
            </div>
          </div>
        </div>
        <div class="reply-area" v-else>
          <comp-new-comment
            :isFirst="false"
            :idx="index"
            :type="'reply'"
            :content="comment.content"
            @handleSubmitAdd="handleSubmitAdd"
            @handleSubmitModify="handleSubmitModify" />
        </div>
      </div>
    </div>
    <comp-new-comment
      :isFirst="true"
      :type="'new'"
      :content="content"
      @handleSubmitAdd="handleSubmitAdd"
      @handleSubmitModify="handleSubmitModify" />
  </div>
</template>

<script>
import CompNewComment from "@/components/page/test/compNewComment";
import common from "@/utils/common";

export default {
  name: "compComment",
  components: { CompNewComment },
  props: {
    commentInfo: {
      type: [Array]
    },
  },
  mixins: [common],
  data() {
    return {
      userInfo: {
        name: '선희빈',
      },
      content: '',
      modifyTarget: null,
    };
  },
  methods: {
    dateFormatter(value) {
      let date = value.toISOString().split("T")[0]
      let time = value.toTimeString().split(" ")[0];
      return date + " " + time
    },
    modifyComment(idx, isFirst) {
      this.modifyTarget = idx
      if (isFirst) {
        this.commentInfo[idx].mode = 1
        this.commentInfo[idx].content = this.commentInfo[idx].content.replaceAll('<br>', '\n')
      }
    },
    handleSubmitAdd(value, idx, isFirst) {
      let commentInfo = {}
      commentInfo.mode = 0
      commentInfo.name = this.userInfo.name
      commentInfo.content = value.content
      commentInfo.file = value.file
      commentInfo.dateTime = new Date()
      commentInfo.reply = []

      this.$emit('handleSubmitAdd', commentInfo, isFirst, idx)
    },
    handleSubmitModify(value, idx, isFirst) {
      console.log("this.modifyTarget >>> ", this.modifyTarget);
      let commentInfo = {}
      commentInfo.mode = 0
      commentInfo.name = this.userInfo.name
      commentInfo.content = value.content
      commentInfo.file = value.file
      commentInfo.dateTime = new Date()

      if(isFirst) {
        this.$emit('handleSubmitModify', commentInfo, isFirst, this.modifyTarget)
      } else {
        this.$emit('handleSubmitModify', commentInfo, isFirst, idx+1)
      }
    },
    handleReply(idx, isFirst) {
      console.log(this.commentInfo[idx]);

      if(isFirst) {
        let commentInfo = {}
        commentInfo.mode = 1
        commentInfo.name = this.userInfo.name
        commentInfo.content = ''
        commentInfo.file = []
        commentInfo.dateTime = new Date()

        this.commentInfo[idx].reply.push(commentInfo)
      }
    },
  }
};
</script>

<style lang="scss">
.comp-comment-wrap > .comment > div {
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;

  &:first-child {
    padding-top: 0;
  }

  .reply-area {
    padding-left: 30px;
  }
}


.comp-comment-wrap {
  width: 100%;

  .comment {
    padding-bottom: 20px;

    .comment-area {}

    .reply-area.row {
      align-items: flex-start;
    }

    .profile {
      flex-shrink: 0;
      width: 27px;
      height: 27px;
      background-color: #7b71b7;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 6px;
    }

    .comment-info-wrap {
      letter-spacing: -0.5px;
      font-size: 16px;
      line-height: 28px;
      height: 100%;
      width: 100%;

      .name {
        font-weight: bold;
      }

      .datetime {
        color: #9a9a9a;
        font-size: 14px;
      }

      .attachments {
        font-size: 12px;

        .allDownload {
          margin-left: 10px;
        }
      }

      .footer-wrap {
        &.row {
          align-items: flex-end;
          justify-content: space-between;
        }

        .file {
          font-size: 12px;
          line-height: 21px;

          .name {
            font-weight: normal;
            text-decoration: underline;
            padding-left: 10px;
          }

          .size {
            color: #9a9a9a;
            margin-left: 10px;
          }
        }

        .bar {
          content: "";
          display: inline-block;
          width: 1px;
          height: 13px;
          background-color: black;
        }
      }
    }
  }

  .comment > .row {
    align-items: flex-start;
  }
}
</style>