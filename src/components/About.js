import React from 'react'

export default function About() {
  return (
    <div>
      <h1 className='white my-3 mx-1'>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              API'S
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>Textify is a text based utility assisting users to write simple and better:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem mollitia, natus omnis consectetur ut atque cupiditate et numquam officiis nihil amet alias nostrum quae illo aspernatur id! Explicabo, sequi sit assumenda ut vitae nihil expedita numquam voluptatem sunt.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              FAQ'S
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus libero quae, consectetur odit quas maiores tempora itaque eos magnam fugit voluptatem molestias harum perferendis illum ipsam sed ullam officiis aspernatur ea repellat animi. Error, aliquid quae veniam unde sapiente soluta.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Ideals
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptas deleniti ipsum doloremque ab cupiditate vel necessitatibus vitae veniam, quidem similique? Unde, dolore in voluptate, earum quae minus dolorem reprehenderit quidem voluptates blanditiis quod illum at dolores animi ab.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
