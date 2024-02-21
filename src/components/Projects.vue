<script setup>
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const components = {
  Swiper,
  SwiperSlide
};
const modules = [Pagination, Autoplay];
</script>

<template>
  <div class="page w-full">
    <div class="w-full pt-10 pb-10">
      <div class="flex justify-evenly">
        <div
          class="bg-white bg-opacity-10 backdropbackdrop-blur-lgp-5 transition-all p-5 w-2/6 rounded-lg h-auto"
        >
          <div class="text-textYellow text-xl pb-5">Education Website</div>
          <div class="break-words text-white textarea-md">
            This is an innovative educational website designed to enhance the
            learning experience for students, streamline administrative tasks
            for schools, and provide a user-friendly platform for teachers. This
            project aimed to bridge the gap between traditional education and
            the digital age, making education accessible and interactive.
          </div>
          <div class="space-x-2 space-y-3 pt-2">
            <div class="badge badge-accent badge-outline">VUE JS</div>
            <div class="badge badge-accent badge-outline">TAILWIND</div>
            <div class="badge badge-accent badge-outline">JAVASCRIPT</div>
            <div class="badge badge-accent badge-outline">LARAVEL</div>
            <div class="badge badge-accent badge-outline">MYSQL</div>
            <div class="badge badge-accent badge-outline">INERTIA</div>
          </div>
          <div class="pt-5 flex items-center justify-start space-x-4">
            <a href="https://www.exbrainedu.com" class="pl-3 text-white tover"
              >https://wwww.exbrainedu.com</a
            ><Icon icon="material-symbols:arrow-outward" color="white" />
          </div>
        </div>
        <div class="w-3/6">
          <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false
            }"
            :modules="modules"
            class="mySwipe"
          >
            <swiper-slide
              ><img
                src="../assets/School/Schools.png"
                alt=""
                srcset=""
                class="rounded-2xl"
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/School/Schools1.png"
                alt=""
                srcset="" /></swiper-slide
            ><swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/School/Schools2.png"
                alt=""
                srcset=""
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/School/Schoola.png"
                alt=""
                srcset="" /></swiper-slide
            ><swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/School/Schoola1.png"
                alt=""
                srcset=""
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/School/Schoola2.png"
                alt=""
                srcset=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="divider px-10 pt-5"></div>
      <!-- SECOND TABBBBBB -->
      <div class="flex justify-evenly pt-10 flex-row-reverse">
        <div
          class="bg-white bg-opacity-10 backdropbackdrop-blur-lgp-5 transition-all p-5 w-2/6 rounded-lg h-auto"
        >
          <div class="text-textYellow text-xl pb-5">Brdige Website</div>
          <div class="break-words text-white textarea-md">
            BridgeJP is a cutting-edge agency website designed to facilitate the
            recruitment process for Japan-based tech companies seeking talented
            professionals. This platform empowers job applicants to create
            Japan-standard CVs, showcase their technical skills, and take coding
            tests. Meanwhile, companies can efficiently assess candidates'
            qualifications, schedule interviews, and streamline the hiring
            process. With a user-friendly interface, BridgeJP bridges the gap
            between talented individuals and Japan's dynamic tech industry.
          </div>
          <div class="space-x-2 space-y-3 pt-2">
            <div class="badge badge-accent badge-outline">VUE JS</div>
            <div class="badge badge-accent badge-outline">TAILWIND</div>
            <div class="badge badge-accent badge-outline">JAVASCRIPT</div>
            <div class="badge badge-accent badge-outline">LARAVEL</div>
            <div class="badge badge-accent badge-outline">MYSQL</div>
            <div class="badge badge-accent badge-outline">INERTIA</div>
          </div>
          <div class="pt-5 flex items-center justify-start space-x-4">
            <a href="https://www.exbrainedu.com" class="pl-3 text-white tover"
              >https://wwww.bridge-mm.com</a
            ><Icon icon="material-symbols:arrow-outward" color="white" />
          </div>
        </div>
        <div class="w-3/6 rounded-2xl">
          <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :autoplay="{
              delay: 2400,
              disableOnInteraction: false
            }"
            :modules="modules"
            class="mySwipe rounded-2xl"
          >
            <swiper-slide
              ><img
                src="../assets/Bridge/Bridge1.png"
                alt=""
                srcset=""
                class="rounded-2xl"
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Bridge/Bridgeu.png"
                alt=""
                srcset="" /></swiper-slide
            ><swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Bridge/Bridge2.png"
                alt=""
                srcset=""
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Bridge/Bridge3.png"
                alt=""
                srcset=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="divider px-10 pt-5"></div>

      <!-- Third TABBBBBB -->
      <div class="flex justify-evenly pt-10">
        <div
          class="bg-white bg-opacity-10 backdropbackdrop-blur-lgp-5 transition-all p-5 w-2/6 rounded-lg h-auto"
        >
          <div class="text-textYellow text-xl pb-5">Record Lable Website</div>
          <div class="break-words text-white textarea-md">
            A comprehensive music label website designed to empower both
            musicians and music enthusiasts. This platform offers a
            user-friendly interface for artists to upload their music, artwork,
            and even provides mastering services to enhance the audio quality of
            their tracks. Music enthusiasts can discover and enjoy a wide range
            of music genres while supporting emerging artists.
          </div>
          <div class="space-x-2 space-y-3 pt-10">
            <div class="badge badge-accent badge-outline">NOde JS</div>
            <div class="badge badge-accent badge-outline">Express JS</div>
            <div class="badge badge-accent badge-outline">JAVASCRIPT</div>
            <div class="badge badge-accent badge-outline">JWT</div>
            <div class="badge badge-accent badge-outline">Mongo DB</div>
            <div class="badge badge-accent badge-outline">Digital Ocean</div>
          </div>
        </div>
        <div class="w-3/6">
          <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :autoplay="{
              delay: 2600,
              disableOnInteraction: false
            }"
            :modules="modules"
            class="mySwipe"
          >
            <swiper-slide
              ><img
                src="../assets/Music/Record1.png"
                alt=""
                srcset=""
                class="rounded-2xl"
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Music/Record2.png"
                alt=""
                srcset="" /></swiper-slide
            ><swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Music/Record3.png"
                alt=""
                srcset=""
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Music/Record4.png"
                alt=""
                srcset=""
            /></swiper-slide>
            <swiper-slide
              ><img
                class="rounded-2xl"
                src="../assets/Music/Record5.png"
                alt=""
                srcset=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- final div -->
    </div>
    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
      <aside class="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          ></path>
        </svg>
        <p>Thanks for Scrolling Here.</p>
      </aside>
    </footer>
  </div>
</template>

<style>
.tover:hover {
  text-shadow: 0 0 5px #1ab4e7, 0 0 10px #1ab4e7, 0 0 30px #18a2d0,
    0 0 45px #18a2d0, 0 0 60px #18a2d0;
  font-weight: bolder;
}
.mySwiper .swiper-pagination-bullet-active {
  background-color: #ffd300; /* Change to your desired active color */
}
.mySwiper .swiper-pagination-bullet {
  background-color: white; /* Change to your desired color */
}
</style>
