<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
onMounted(() => {
  gsap.from(".firstdiv", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.5
  });
  gsap.from(".imageDiv", {
    opacity: 0,
    y: -50,
    duration: 2
  });
});
// Path to your PDF file
const pdfPath = "/resume.pdf";

// Function to trigger PDF download
const downloadPDF = async () => {
  try {
    // Fetch the PDF file
    const response = await fetch(pdfPath);
    const blob = await response.blob();
    // Create a URL for the blob
    const blobUrl = URL.createObjectURL(blob);
    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "Zaw Phyo Aung-Resume.pdf"; // Set the desired filename
    // Programmatically click the <a> element to trigger the download
    a.click();
    // Release the blob URL
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error fetching the PDF:", error);
  }
};
</script>

<template>
  <div class="page bg-[#1C2331]">
    <!-- first div -->
    <div
      class="flex px-10 flex-row justify-center items-center space-x-20 pt-8"
    >
      <!-- Image  Dive -->
      <div class="imageDiv opacity-1">
        <img src="../assets/Portfolio.png" class="sm:h-96 h-64" />
      </div>
      <!-- Hello  Div -->
      <div class="">
        <p class="sm:text-7xl text-5xl text-textYellow font-bold firstdiv">
          HELLO !
        </p>
        <p
          class="sm:text-8xl text-6xl bg-white text-[#1C2331] font-bold firstdiv w-fit"
        >
          I'M ZAW
        </p>
        <p class="sm:text-7xl text-5xl text-textYellow font-bold firstdiv">
          WEB & BACKEND
        </p>
        <p
          class="sm:text-7xl text-5xl bg-white text-[#1C2331] font-bold firstdiv"
        >
          DEVELOPER
        </p>
        <p class="pt-10 firstdiv">
          <button
            @click="downloadPDF"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-black rounded-lg group from-red-200 via-red-300 to-yellow-200"
          >
            <span
              class="flex items-center justify-between px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-br rounded-md group-hover:bg-opacity-0"
            >
              Download Resume
              <span class="pl-2"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
              </span>
            </span>
          </button>
        </p>
      </div>
    </div>

    <div class="w-full flex justify-center items-center py-10 firstdiv">
      <p class="w-3/6">
        Welcome to my portfolio! I'm Zaw Phyo Aung, a passionate backend
        developer with an insatiable curiosity for learning new technologies and
        a knack for solving complex problems through coding and debugging. Allow
        me to give you a glimpse into my journey and what drives my enthusiasm
        for the world of backend development.
      </p>
    </div>

    <div class="flex w-full justify-center items-center space-x-9 firstdiv">
      <a
        href="https://www.linkedin.com/in/zaw-phyo-aung-0161b2180/"
        target="_blank"
        ><img src="../assets/linkedin.png" alt="" srcset="" width="45"
      /></a>
      <a href="https://github.com/Justro666" target="_blank"
        ><img src="../assets/github.png" alt="" srcset="" width="45"
      /></a>
      <a href="https://www.facebook.com/zawphyo.jt/" target="_blank"
        ><img src="../assets/facebook.png" alt="" srcset="" width="50"
      /></a>
    </div>
  </div>
</template>
