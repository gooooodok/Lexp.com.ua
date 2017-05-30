<div id="block-social-buttons">
  <!-- Vkontakte Button -->
  <div style="width: 82px; margin-right: 10px;">
    <!-- Put this script tag to the <head> of your page -->
    <script type="text/javascript" src="//vk.com/js/api/openapi.js?96"></script>

    <script type="text/javascript">
      VK.init({apiId: 3645605, onlyWidgets: true});
    </script>

    <!-- Put this div tag to the place, where the Like block will be -->
    <div id="vk_like"></div>
    <script type="text/javascript">
    VK.Widgets.Like("vk_like", {type: "mini", height: 20});
    </script>
  </div>
  <!-- End Vkontakte Button -->

  <!-- Twitter Button -->
  <div style="width: 75px; margin-right: 10px;">
    <a href="https://twitter.com/share" class="twitter-share-button" data-via="twitterapi" data-lang="en">Tweet</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
  </div>
  <!-- End Twitter Button -->

  <!-- Facebook Button -->
  <div style="width: 109px; margin-right: 10px;">
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <div class="fb-like" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-font="arial"></div>
  </div>
  <!-- End Facebook Button -->

  <!-- Google+ Button -->
  <div style="width: 60px;">
    <!-- Place this tag in your head or just before your close body tag. -->
    <script type="text/javascript" src="https://apis.google.com/js/plusone.js">
      {lang: 'uk'}
    </script>

    <!-- Place this tag where you want the +1 button to render. -->
    <div class="g-plusone" data-size="medium"></div>
  </div>
  <!-- End Google+ Button -->
</div>