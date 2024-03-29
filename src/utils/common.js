export default {
  data() {
    return {
      testlist: [
        {
          title: "Interaction",
          router: "/test/interaction",
          isCompleted: false,
        },
        {
          title: "Flex & Grid",
          router: "/test/flexgrid",
          isCompleted: true,
        },
        {
          title: "Slot",
          router: "/test/slot",
          isCompleted: true,
        },
        {
          title: "Star",
          router: "/test/star",
          isCompleted: true,
        },
        {
          title: "UI",
          router: "/test/ui",
          isCompleted: true,
        },
        {
          title: "Debounce",
          router: "/test/debounce",
          isCompleted: true,
        },
        {
          title: "Copy Button",
          router: "/test/copybutton",
          isCompleted: true,
        },
        {
          title: "Hamburger",
          router: "/test/hamburger",
          isCompleted: true,
        },
        {
          title: "Excel",
          router: "/test/excel",
          isCompleted: false,
        },
        {
          title: "Move",
          router: "/test/move",
          isCompleted: true,
        },
        {
          title: "File Upload",
          router: "/test/fileupload",
          isCompleted: true,
        },
        {
          title: "highchart.js",
          router: "/test/highchart",
          isCompleted: false,
        },
        {
          title: "$attrs",
          router: "/test/attrs",
          isCompleted: true,
        },
        {
          title: "Searchable Selectbox",
          router: "/test/searchable",
          isCompleted: true,
        },
        {
          title: "Comment",
          router: "/test/comment",
          isCompleted: true,
        },
        {
          title: "Crawling",
          router: "/test/crawling",
          isCompleted: false,
        },
        {
          title: "Social Login",
          router: "/test/sociallogin",
          isCompleted: false,
        },
        {
          title: "Text Editor",
          router: "/test/texteditor",
          isCompleted: true,
        },
        {
          title: "Swiper",
          router: "/test/swiper",
          isCompleted: false,
        },
        {
          title: "Hidden Text",
          router: "/test/hiddentext",
          isCompleted: true,
        },
        {
          title: "Filter",
          router: "/test/filter",
          isCompleted: true,
        },
        {
          title: "PDF preview",
          router: "/test/pdfpreview",
          isCompleted: true,
        },
        {
          title: "Inpinite Scroll",
          router: "/test/infinitescroll",
          isCompleted: true,
        },
        {
          title: "Loading",
          router: "/test/loading",
          isCompleted: false,
        },
        {
          title: "Toast",
          router: "/test/toast",
          isCompleted: true,
        },
        {
          title: "Dashboard",
          router: "/test/kpidashboard",
          isCompleted: false,
        },
        {
          title: "Drag And Drop",
          router: "/test/draganddrop",
          isCompleted: false,
        },
      ],
    };
  },
  methods: {
    moveTo(to) {
      return this.$router.push(to);
    },
    byteCalculation(bytes) {
      let byte = parseInt(bytes);
      let s = ["bytes", "KB", "MB", "GB", "TB", "PB"];
      let e = Math.floor(Math.log(byte) / Math.log(1024));
      return (byte / Math.pow(1024, Math.floor(e))).toFixed(2) + s[e];
    },
    returnFileSize(bytes) {
      if (bytes < 1024) {
        return bytes + "bytes";
      } else if (bytes >= 1024 && bytes < 1048576) {
        return (bytes / 1024).toFixed(1) + "KB";
      } else if (bytes >= 1048576) {
        return (bytes / 1048576).toFixed(1) + "MB";
      }
    },
    getTotalSize(fileList) {
      let fileTotalSize = 0;
      fileList.forEach((file) => {
        fileTotalSize += Number(file.size);
      });

      return this.returnFileSize(fileTotalSize);
    },
  },
};
