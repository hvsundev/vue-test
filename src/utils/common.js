export default {
  data() {
    return {
      testlist: [
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
          title: "Tooltip",
          router: "/test/tooltip",
          isCompleted: true,
        },
        {
          title: "Toggle",
          router: "/test/toggle",
          isCompleted: false,
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
          title: "waypoint",
          router: "/test/waypoint",
          isCompleted: false,
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
          title: "checkbox",
          router: "/test/checkbox",
          isCompleted: false,
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
