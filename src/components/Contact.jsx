import React from "react";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("/images/skyline.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "-1",
  };
  return (
    <div className="border-4 border-blue-800">
      {/* <div
        className="bg-no-repeat shadow-lg overflow-y-scroll bg-cover bg-fixed bg-center z-0 items-center w-auto h-full border-4 border-orange-500"
        style={backgroundImageStyle}
      > */}
      <div className="border-2 w-full p-5 bg-brandNavy border-yellow-400">
        <h1 className="text-brandLightYellow text-xl">Contact</h1>
      </div>

      <div>
        <div className="border-8 border-yellow-500 flex justify-center items-center h-96">
          <div className=" bg-brandNavy w-96 h-fit border-4 border-black flex justify-center items-center flex-col">
            <div>
              <h3 className="p-10 text-brandLightYellow text-sm">
                <span className="text-xl" style={{ fontFamily: "heavyBold" }}>
                  Holor sit
                </span>{" "}
                amet consectetur adipisicing elit. Quidem dolorem omnis natus
                quos iure. and Quidem
              </h3>
            </div>
            <form
              // action="https://formsubmit.co/ec33763cb0b975876bf4f029deb7978c"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://www.twoseasnyc.com/thankyou"
              ></input>
              <div>
                <div>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                </div>
                <div>
                  <button className="flex mx-auto text-white bg-brandBlue rounded text-lg">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Contact;
