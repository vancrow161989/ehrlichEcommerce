class News extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="post bg-grayTheme-500 pb-10 pt-14 text-center">
        <div class="container">
          <h2 class="mb-10 text-themeLg font-extrabold capitalize">
            your next inspo
          </h2>
          <p class="mb-6">
            Checkout who’s wearing what by using #THREADEDInspo on Instagram
          </p>
          <div class="post-list grid grid-cols-5 flex-wrap gap-12 py-6">
            <div class="post-item">
              <a href="#"><img src="./assets/images/post1.png" alt="" /></a>
            </div>
            <div class="post-item">
              <a href="#"><img src="./assets/images/post2.png" alt="" /></a>
            </div>
            <div class="post-item">
              <a href="#"><img src="./assets/images/post3.png" alt="" /></a>
            </div>
            <div class="post-item">
              <a href="#"><img src="./assets/images/post4.png" alt="" /></a>
            </div>
            <div class="post-item">
              <a href="#"><img src="./assets/images/post5.png" alt="" /></a>
            </div>
          </div>
          <div class="py-6">
            <button class="btn">view all posts</button>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-news", News);
