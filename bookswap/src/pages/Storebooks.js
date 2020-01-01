import React, { Component } from "react";

export default class Storebooks extends Component {
  state = {
    storeBook: [
      {
        book_id: 1,
        typeBook_id: 1,
        image_book:
          "https://www.readings.com.au/system/uploads/assets/0003/9960/533578a7ae4e5ca372c35ab959b9d920.jpg",
        name_book: "The Bad Guys Episode 1"
      },
      {
        book_id: 2,
        typeBook_id: 1,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51sOSw61H1L.jpg",
        name_book: "A Woman of War"
      },
      {
        book_id: 3,
        typeBook_id: 1,
        image_book:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpaxjrmapjWSfrSUNYd5ReCTX46vHTRk02cTOUj2rKF3aoLo0&s",
        name_book: "Where the River Runs Gold"
      },
      {
        book_id: 4,
        typeBook_id: 1,
        image_book:
          "https://damonza.com/wp-content/uploads/portfolio/fiction/World-Whisperer.jpg",
        name_book: "World Wrisperer"
      },
      {
        book_id: 5,
        typeBook_id: 1,
        image_book:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523720881l/37486222.jpg",
        name_book: "The Tattooist of Auschwitz"
      },
      {
        book_id: 6,
        typeBook_id: 2,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/41yMmCg9MNL._SX331_BO1,204,203,200_.jpg",
        name_book: "The Better Business Book"
      },
      {
        book_id: 7,
        typeBook_id: 2,
        image_book:
          "http://www.ahead.asia/wp-content/uploads/2017/03/BusinessAdventures.jpg",
        name_book: "Business Adventures"
      },
      {
        book_id: 8,
        typeBook_id: 2,
        image_book:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/non-fiction-business-kindle-book-cover-design-template-2fac9a2b8a04f729d06c809ad50214b6_screen.jpg?ts=1561422624",
        name_book: "Createtive Business Startup"
      },
      {
        book_id: 9,
        typeBook_id: 2,
        image_book:
          "https://leadersarereaders.blog/wp-content/uploads/2018/12/Lost-and-Founder.png",
        name_book: "Lost and Founder "
      },
      {
        book_id: 10,
        typeBook_id: 2,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51rTrLnkjuL.jpg",
        name_book: "Smart Business"
      },
      {
        book_id: 11,
        typeBook_id: 3,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51Ww2TsGngL._SX381_BO1,204,203,200_.jpg",
        name_book: "Spoken English"
      },
      {
        book_id: 12,
        typeBook_id: 3,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51otPsQIQaL._SX378_BO1,204,203,200_.jpg",
        name_book: "Foundations of Discrete Mathematics"
      },
      {
        book_id: 13,
        typeBook_id: 3,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/41vb62%2Bh9AL._SX384_BO1,204,203,200_.jpg",
        name_book: "Biochemistry"
      },
      {
        book_id: 14,
        typeBook_id: 3,
        image_book:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471858075l/31574399._SY475_.jpg",
        name_book: "Principles of Physics for Class XI"
      },
      {
        book_id: 15,
        typeBook_id: 3,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51l5-JweYWL._SX327_BO1,204,203,200_.jpg",
        name_book: "Textbook of Microbiology"
      },
      {
        book_id: 16,
        typeBook_id: 4,
        image_book:
          "https://ae01.alicdn.com/kf/HTB18u9aNVXXXXb6XFXXq6xXFXXXF/Chinese-weaving-graphic-tutorial-book-handmade-DIY-sweater-books-The-most-detailed-crochet-knitting-textbooks.jpg",
        name_book:
          "Chinese weaving graphic tutorial book handmade DIY sweater books The most detailed crochet"
      },
      {
        book_id: 17,
        typeBook_id: 4,
        image_book: "http://ds.lnwfile.com/dz54kz.jpg",
        name_book: "เทคนิคการเบ็บกระเป๋าผ้า"
      },
      {
        book_id: 18,
        typeBook_id: 4,
        image_book:
          "https://images-na.ssl-images-amazon.com/images/I/51p-T1OVDFL._SX258_BO1,204,203,200_.jpg",
        name_book: "Everything Origami"
      },
      {
        book_id: 19,
        typeBook_id: 4,
        image_book:
          "https://www.thebookfarminc.com/images/P/9781532119484-01.jpg",
        name_book: "3-D Origami: Paper Building Blocks"
      },
      {
        book_id: 20,
        typeBook_id: 4,
        image_book:
          "https://library.kku.ac.th/ulib//_fulltext/cover/38630/20160722145533_628.jpg",
        name_book: "DIY งานสานพร้อมตกแต่งด้วยผ้าและเดคูพาจ "
      },
      {
        book_id: 21,
        typeBook_id: 5,
        image_book:
          "https://magazines-international.com/wp-content/uploads/2018/09/WIRED-UK.jpg",
        name_book: "WIRED (UK)"
      },
      {
        book_id: 22,
        typeBook_id: 5,
        image_book:
          "https://kazzmarket.com/wp-content/uploads/2019/11/NUMPUNG-Puen-Khaninch.jpg",
        name_book: "KAZZ"
      },
      {
        book_id: 23,
        typeBook_id: 5,
        image_book:
          "https://magazines-international.com/wp-content/uploads/2018/09/Ryan-Reynolds-for-GQ-US.jpg",
        name_book: "GQ MAGAZINE"
      },
      {
        book_id: 24,
        typeBook_id: 5,
        image_book:
          "https://www.mbookstore.com/media/images/content/10539/10539.jpg",
        name_book: "RUSH Magazine"
      }
    ],
    storeTypes: [
      {
        typeBook_id: 1,
        name_type: "FICTION"
      },
      {
        typeBook_id: 2,
        name_type: "BUSINESS"
      },
      {
        typeBook_id: 3,
        name_type: "EDUCATION"
      },
      {
        typeBook_id: 4,
        name_type: "DIY"
      },
      {
        typeBook_id: 5,
        name_type: "MAGAZINE"
      }
    ]
  };

  render() {
    return <div></div>;
  }
}
