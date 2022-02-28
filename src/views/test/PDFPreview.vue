<template>
  <div class="inner">
    <p class="test-title">PDF Preview</p>
    <div class="preview-wrap">
      <div class="preview-area">
        <p>iframe</p>
        <iframe src="/assets/test.pdf"></iframe>
      </div>
      <div class="preview-area">
        <p>iframe</p>
        <iframe src="//image.snack24h.com/clean24/pdf/clean_int_200716.pdf#toolbar=0&navpanes=0&scrollbar=0"></iframe>
      </div>
      <div class="preview-area">
        <p>embed</p>
        <embed src="//image.snack24h.com/clean24/pdf/clean_int_200716.pdf" type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PDFPreview"
}
</script>

<style lang="scss">
.preview-wrap {
  width: 100%;
  display: flex;

  .preview-area {
    position: relative;
    width: 50%;
    height: 650px;
    border: 1px solid black;
    margin-left: -1px;

    p {
      position: absolute;
      font-size: 17px;
      font-weight: bold;
      padding: 3px 12px;
      color: #fff;
      background-color: #7b71b7;
      display: inline-block;
      border-radius: 50%;
      bottom: 10px;
      right: 25px;
    }

    iframe {
      background-color: white;
      width: 100%;
      height: 100%;
    }
  }
}
</style>