import "./Header.css";

export default function Header() {
  return (
    <div className="position-relative img-header">
      <div className="container vh-100 ">
        <div className="position-absolute top-50 header-animation">
          <span className="oracle-partner container">
            <img
              src="/Images/oracle.svg"
              alt="Oracle Partner"
              className="responsive-img"
            />
            <span className={`pe-2`}>| Partner</span>
          </span>
          <h1 className=" text-white text-shadow ">
            DeepL TECHNOLOGIES &{" "}
            <span className="d-block ps-5">BLOCKCHAIN SOLUTIONS.</span>
          </h1>
          <p className="header-animation-2 pe-5  text-end text-info">
            Managing Your Data, Empowering Your Business.
          </p>
        </div>
      </div>
    </div>
  );
}
