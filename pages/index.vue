<template>
  <div>
    <FeatureHeaderTwo
      :headline="config.seo.mainKeyword"
      :subline="config.subline"
    />

    <FeaturedHeader />

    <WinnerProducts />

    <Brands />

    <div class="container">
      <Products :products="products" />

      <div class="text-center pt-5">
        <nuxt-link
          to="/shop/"
          :title="`${config.seo.mainKeyword} Shop`"
          class="btn btn-primary btn-lg"
          >zum Shop</nuxt-link
        >
      </div>
    </div>

    <!-- <Advantages /> -->

    <PopularProducts />

    <SeoText :seoData="seoData" />

    <!-- <Hersteller /> -->

    <!-- <Team /> -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";

const seoData = config.seo.index;

export default {
  name: "IndexPage",
  head: {
    title: seoData.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: seoData.metaDescription,
      },
      {
        hid: "robots",
        name: "robots",
        content: seoData.robots,
      },
    ],
  },
  data() {
    return {
      seoData,
      config,
      products: products.slice(0, config.numberOfProductsOnStartpage),
    };
  },
};
</script>
