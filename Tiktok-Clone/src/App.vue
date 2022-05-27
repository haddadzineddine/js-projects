<script setup>
import NavBar from "./components/NavBar.vue";
import Menu from "./components/Menu.vue";
import SuggestedAccountList from "./components/SuggestedAccountList.vue";
import VideoCard from "./components/VideoCard.vue";
</script>

<template>
  <NavBar class="fixed top-0" />
  <div class="mt-28 mx-60 flex">
    <section class="fixed">
      <Menu />
      <div class="mt-6">
        <h2 class="text-gray-600 text-sm font-medium">Suggested accounts</h2>
        <SuggestedAccountList class="mt-8" />
      </div>
    </section>
    <main class="px-20 ml-auto w-9/12 space-y-12 mb-4">
      <VideoCard
        channel=".i9ot 𝖒𝖔𝖍𝖆𝖒𝖒𝖊 🍫🖤"
        description="🖤🎧."
        song="الصوت الأصلي - 𝖒𝖔𝖍𝖆𝖒𝖒𝖊𝖉 🍫🖤"
        image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/99492129569d03e8dffe67dde42b13a3~c5_100x100.jpeg?x-expires=1653865200&x-signature=RSvys4sv8wqlhrssEkTM7kcZKlw%3D"
        url="https://v16-webapp.tiktok.com/3327dc3c8b47a9855ccdd440320a1304/6291b4c9/video/tos/useast2a/tos-useast2a-ve-0068c004/226f36efe2c84ef4be1a3995bad06789/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1650&bt=825&btag=80000&cs=0&ds=3&ft=eXd.6HJbMyq8ZOrbSwe2NkFTyl7Gb&mime_type=video_mp4&qs=0&rc=ZmY8ZjhoPDNnaWdpaWRmNUBpM2gza2Y6Znc7ZDMzNzczM0BfYC1gXzEyNWIxLWMvXzYzYSMxZmk0cjRnMDRgLS1kMTZzcw%3D%3D&l=20220527233553010217134204065F72F8"
      />

      <VideoCard
        channel="lianggeshuoche"
        description="Judging the distance in this way, you won't be afraid of collision any more! 🥶"
        song="原聲 - 亮哥说车"
        image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d3f5027ef16e61dd676f2acbd66a26a2~c5_100x100.jpeg?x-expires=1653865200&x-signature=xL97JZegelYDgH8YGm%2FNyUuvGkY%3D"
        url="https://v16-webapp.tiktok.com/c837bfd52ef0aca7d833b51398548126/6291ad8f/video/tos/maliva/tos-maliva-ve-0068c799-us/30a6559c67584140b80b6bdbba367383/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4492&bt=2246&btag=80000&cs=0&ds=3&ft=eXd.6HJbMyq8ZczTSwe2NIlwyl7Gb&mime_type=video_mp4&qs=0&rc=ZzNlM2Y2aDw0NTQzM2RmPEBpajNqczw6ZnNsPDMzZzgzNEAyYmM2Y2FiNV4xNDEwNmI1YSNlX2MtcjRvM3NgLS1kLy9zcw%3D%3D&l=20220527230406010192164132055DDA43"
      />

      <VideoCard
        channel="itsjustcristiano"
        description="the way that ronaldo contole the ball is amazing ❤❤🔥"
        image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ee105897d9d93fdd25b22d685b48d794~c5_100x100.jpeg?x-expires=1653865200&x-signature=UlVNQZ7BD39mbRR8vlBS6ukMn1I%3D"
        song="original sound - itsJust Cristiano"
        url="https://v16-webapp.tiktok.com/0f997ca81111d0fa1e334377b0b980ee/6291ac30/video/tos/useast2a/tos-useast2a-ve-0068c004/3ab2f717a9034cd7a5061fb8ec25939f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1770&bt=885&btag=80000&cs=0&ds=3&ft=eXd.6HJbMyq8Z0dTSwe2NFDoyl7Gb&mime_type=video_mp4&qs=0&rc=aDYzZGY1OTQ1PGUzZ2VnM0BpamRzbjs6ZmZqPDMzNzczM0AxNC4tYWBiNmIxY2FfLS0uYSNjYGdmcjRfbXJgLS1kMTZzcw%3D%3D&l=20220527225904010223080150165D7D31"
      />
    </main>
  </div>
</template>
