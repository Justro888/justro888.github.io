<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="page bg-[#1C2331]">
    <div class="pb-10">
      <div class="w-full items-center justify-center flex flex-col">
        <p class="sm:text-5xl text-3xl text-textYellow font-bold pb-10">
          EXPERIENCES
        </p>
        <div
          class="bg-white bg-opacity-20 backdrop-blur-md p-5 rounded-lg text-textYellow"
        >
          I've been doing web development for over 3 years now, and I'm always
          eager to learn more in this fast paced industry.
        </div>
      </div>
      <!-- skillset divstart -->
      <div class="flex flex-row w-full justify-around items-center pt-24">
        <div class="w-3/6 px-20 space-y-10">
          <div class="space-y-5">
            <div class="flex flex-row justify-start items-center space-x-4">
              <p class="sm:text-3xl text-2xl text-textYellow font-bold">
                VILT Stack
              </p>
              <Icon icon="logos:vue" width="35" />
              <Icon icon="devicon:php" width="35" />
              <Icon icon="logos:laravel" width="35" />
              <Icon icon="devicon:tailwindcss" width="35" />
            </div>
            <div class="text-white">
              Vue.js, Inertia.js, Laravel, and Tailwind CSS, I develop
              high-quality web applications with seamless functionality and
              user-friendly interfaces.
            </div>
          </div>
          <div class="space-y-5">
            <div class="flex flex-row justify-start items-center space-x-4">
              <p class="sm:text-3xl text-2xl text-textYellow font-bold">
                Restful,GraphQl Api <br />
                NodeJS & Laravel
              </p>
              <Icon icon="eos-icons:api-outlined" color="white" width="35" />
              <Icon icon="vscode-icons:file-type-graphql" width="35" />
              <Icon
                icon="simple-icons:apollographql"
                color="#e436ab"
                width="35"
              />
              <Icon icon="devicon:nodejs" color="white" width="35" />
            </div>
            <div class="text-white">
              Proficient in Node.js and Laravel, I build Restful APIs and
              GraphQL APIs, facilitating seamless data exchange and integrations
              for diverse applications.
            </div>
          </div>
        </div>
        <!-- div right logo -->
        <div class="w-3/6 text-white flex flex-col space-y-10 px-20">
          <!-- firsst -->
          <div class="w-full flex items-center justify-center space-x-16">
            <div class="flex flex-col items-center justify-center">
              <p>80%</p>
              <div class="radial-progress text-textYellow" style="--value: 80">
                <Icon icon="devicon:vuejs" color="white" width="40" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>85%</p>
              <div class="radial-progress text-textYellow" style="--value: 85">
                <Icon icon="logos:laravel" width="40" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>85%</p>
              <div class="radial-progress text-textYellow" style="--value: 85">
                <Icon icon="devicon:nodejs" color="white" width="50" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>80%</p>
              <div class="radial-progress text-textYellow" style="--value: 80">
                <Icon
                  icon="skill-icons:expressjs-light"
                  color="white"
                  width="40"
                />
              </div>
            </div>
          </div>
          <!-- second -->
          <div class="w-full flex items-center justify-center space-x-16">
            <div class="flex flex-col items-center justify-center">
              <p>90%</p>
              <div class="radial-progress text-textYellow" style="--value: 90">
                <Icon
                  icon="vscode-icons:file-type-js-official"
                  color="white"
                  width="40"
                />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>90%</p>
              <div class="radial-progress text-textYellow" style="--value: 90">
                <Icon icon="devicon:tailwindcss" color="white" width="50" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>90%</p>
              <div class="radial-progress text-textYellow" style="--value: 90">
                <Icon icon="dashicons:rest-api" color="white" width="40" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>50%</p>
              <div class="radial-progress text-textYellow" style="--value: 50">
                <Icon icon="vscode-icons:file-type-graphql" width="35" />
              </div>
            </div>
          </div>
          <!-- Third -->
          <div class="w-full flex items-center justify-center space-x-16">
            <div class="flex flex-col items-center justify-center">
              <p>80%</p>
              <div class="radial-progress text-textYellow" style="--value: 80">
                <Icon
                  icon="devicon:mongodb-wordmark"
                  color="white"
                  width="40"
                />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>80%</p>
              <div class="radial-progress text-textYellow" style="--value: 80">
                <Icon icon="logos:mysql" color="white" width="50" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>70%</p>
              <div class="radial-progress text-textYellow" style="--value: 70">
                <Icon icon="logos:digital-ocean" color="white" width="50" />
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p>70%</p>
              <div class="radial-progress text-textYellow" style="--value: 70">
                <Icon icon="devicon:gitlab" color="white" width="50" />
              </div>
            </div>
          </div>
          <!-- thrid end -->
        </div>
      </div>
    </div>
  </div>
</template>
