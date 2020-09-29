<template>
  <div class="about-container">
    <h1 class="aboutus-header">About us</h1>
    <div class="about-top">
      <h2>Meetup creates possibilites</h2>
      <h4>
        <p>
          Meetup is a platform for finding and building local communities. 
          People use Meetup to meet new people, learn new things, find support, 
          get out of their comfort zones, and pursue their passions, together.
        </p>
        <p>
          That's why we created a platform for people to upload, write or what
          they do in their fields and connect with others on that basis. Things
          we research, develop or write about are, in our view, the best way to
          show who we are.
        </p>
      </h4>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
<style scoped>
.about-container {
  width: 80%;
  margin: 0 auto;
  height: 700px;
}
.aboutus-header {
  font-size: 32px;
  font-style: italic;
  font-display: bold;
  margin: 15px auto;
  display: flex;
  justify-content: center;
}
.about-top {
  width: 100%;
  font-size: 24px;
  font-family: cursive;
}
.about-top > p {
  margin: 5px;
  font-size: 16px;
}
.about-top > h2 {
  margin: 20px;
  font-size: 32px;
}
</style>
