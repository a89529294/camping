import img1 from "@/assets/temp/1.jpg";
import img2 from "@/assets/temp/2.jpg";
import img3 from "@/assets/temp/3.jpg";
import img4 from "@/assets/temp/4.jpg";
import img5 from "@/assets/temp/5.jpg";
import img6 from "@/assets/temp/6.jpg";
import img7 from "@/assets/temp/7.jpg";
import img8 from "@/assets/temp/8.jpg";

export const meals = {
  type: "meals" as const,
  data: [
    {
      id: "1",
      name: "套餐一",
      sections: [
        {
          title: "主餐",
          images: [img1, img2],
          description:
            "麻辣豆腐是一道经典的中国菜，起源于四川省。它以嫩滑的豆腐块为主，浸泡在由辣椒豆瓣酱为基础的美味而辛辣的酱汁中，同时搭配了花椒的麻辣风味。通常使用猪肉或牛肉碎肉，为这道菜增添了浓厚的风味。麻辣豆腐独特的口感和丰富的调味使其成为辛辣爱好者的最爱，也是川菜浓烈而复杂口味的美味代表。",
        },
        {
          title: "副餐",
          images: [img3, img4, img5],
          description:
            "宫保鸡丁，又称宫爆鸡丁，是一道经典的中式菜肴。这道菜以切成块状的鸡肉为主，配以花生、辣椒和葱，全部浸泡在甜辣口感的宫保酱汁中。宫保鸡丁的口感丰富多样，鸡肉鲜嫩，花生香脆，辣椒提供了一抹微辣的风味。这道菜既有甜味，又有辣味，独特的调味使其成为中餐中备受喜爱的经典之一。",
        },
        {
          title: "點心",
          images: [img6, img7, img8],
          description:
            "蛋挞是一道受欢迎的中式甜点。它的外壳是酥脆的饼皮，包裹着柔滑细腻的蛋奶馅料。这个馅料通常由混合鸡蛋、糖和牛奶制成，经过烘烤后，呈现出金黄色的外表。蛋挞的独特之处在于口感的对比，酥脆的外壳与滑爽的蛋奶馅相结合，带来一种令人陶醉的甜蜜滋味。无论是在茶点间还是庆祝活动中，蛋挞都是备受钟爱的中式甜品。",
        },
      ],
    },
    {
      id: "2",
      name: "套餐二",
      sections: [
        {
          title: "主餐",
          images: [img8],
          description:
            "烧卖是一种常见的中式点心，通常作为点心供应。这些开顶的饺子通常包裹有碎猪肉、虾和各种调味料的混合物。馅料被包裹在薄而透明的小麦或木薯淀粉皮中。烧卖通常是蒸制的，呈现出多汁而美味的口感。它在点心餐厅中很受欢迎，因其精致的味道和口感而受到喜爱。",
        },

        {
          title: "副餐",
          images: [img3, img4, img5],
          description:
            "北京烤鸭是一道源于北京的著名菜品。它涉及将调味过的鸭子烤至皮肤酥脆金黄，肉质鲜嫩。通常将酥脆的鸭皮与薄饼、海鲜酱和切成葱花的青葱一起上桌。食客通常会自己组合薄饼，将美味多汁的鸭肉与其他配料搭配在一起。北京烤鸭以其丰富的味道而闻名，通常被视为奢侈而喜庆的菜品，常在特殊场合上桌。",
        },
        {
          title: "點心",
          images: [img6, img7, img8, img1],
          description:
            "红豆包是一道受欢迎的中式甜点。这款点心以红豆馅为特色，馅料由红豆煮烂并加入适量糖制成。红豆馅包裹在软绵的面团中，然后蒸熟或蒸煮至面皮松软。这些香甜的包子通常呈现出淡淡的红色，象征着吉祥和幸福。红豆包在中式糕点中是一种经典选择，以其美味的红豆馅和柔软的面皮而受到人们的喜爱。",
        },
      ],
    },
  ],
};

export type Meal = (typeof meals)["data"][number];
export type Meals = typeof meals;
