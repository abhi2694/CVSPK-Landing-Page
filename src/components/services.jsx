import React, { Component, PropTypes } from "react";
import {Card} from "react-bootstrap";

class Modal extends React.Component {
	static propTypes = {
		isModalOpen: false,
		closeModal: true,
	};

	constructor(props) {
    super(props);
		this.outerStyle = {
			position: "fixed",
			top: 100,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		this.style = {
			modal: {
				position: "relative",
				width: 500,
				padding: 20,
				boxSizing: "border-box",
				backgroundColor: "#fff",
				margin: "40px auto",
				borderRadius: 3,
				zIndex: 2,
				textAlign: "left",
				boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
				...this.props.style.modal
			},
			overlay: {
				position: "fixed",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.5)",
				...this.props.style.overlay
			}
		};
	}

	// render modal
	render() {
		return (
			<div
				style={{
					...this.outerStyle,
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div style={this.style.overlay} onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div style={this.style.modal}>{this.props.children}</div>
			</div>
		);
	}
}

// overwrite style
const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "white",
    border: "3px solid black",
		padding: "12px 20px",
		color: "black",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};

export class Services extends Component {
  constructor(props) {
		super(props);

		// set initial state
		this.state = {
			isModalOpen: false,
      isInnerModalOpen: false,
      value: "0"
		};

		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	// close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal(value) {
		this.setState({
      isModalOpen: true,
      value: value
		});
	}
  render() {
    return (
      <div id="services" className="text-center bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Scholarships Available</h2>
          </div>
          
          <div className="row">
                
                  <div className="col-md-4">
                    {" "}
                    <img src="img/portfolio/s1.jpg" style={{"max-width":"200px"}}></img>
                    <div className="service-desc">
                      <h3>Talent Incentive Scheme</h3>
                      <p>The types of students can apply under this scheme are those who are already enrolled in the university,those who are seeking admission to the university or those who have already passed out from the university i.e. alumni of the university</p>
                    </div>
                    <button style={mainStyle.button} onClick={() => this.openModal("1")}>
				          	Read More
				            </button>
                    </div>

                    <div className="col-md-4">
                    {" "}
                    <img src="img/portfolio/s2.jpg" style={{"max-width":"200px"}}></img>
                    <div className="service-desc">
                      <h3>FWS Financial Assistance Scheme</h3>
                      <p>The scheme is open to all the students of the University who fulfill the eligibility criteria</p>
                    </div>
                    <button style={mainStyle.button} onClick={() => this.openModal("2")}>
				          	Read More
				            </button>
                    </div>

                    <div className="col-md-4">
                    {" "}
                    <img src="img/portfolio/s3.jpg" style={{"max-width":"200px"}}></img>
                    <div className="service-desc">
                      <h3>Reimbursement/Waiver in case of death of parent</h3>
                      <p>In the event of death of earning parent(s), the student should submit to the office of Dean Students welfare, the duly signed form by the Head of department in Annexure’C’ alongwith necessary documents within 90 days of death</p>
                    </div>
                    <button style={mainStyle.button} onClick={() => this.openModal("3")}>
				          	Read More
				            </button>
                    </div>
                    

				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
          style={modalStyle}
          value={this.state.value}
				>
					{this.state.value === "1" && 
          <div>

            <p>Three types of students can apply under this scheme.</p>
            <ul style={{"color":"black"}}>
              <li style={{"color":"black"}}><p>1. Those who are already enrolled in the university</p></li>
              <li style={{"color":"black"}}><p>2. Those who are seeking admission to the university</p></li>
              <li style={{"color":"black"}}><p>3. Those who have already passed out from the university i.e. alumni of the university</p></li>
            </ul>
            <p>For a student studying in the university, he needs to apply for grant of scholarship by filling a form TIS-I
(Annexure’A’) . Bright Students seeking admission to the university need to fill the form TIS-II (Annexure
‘A’) to avail the incentives for taking admission to the university. Students and alumni of the university wishing
to avail incentives for securing top ranks in competitive exams for higher studies/UPSC exams/defence services
need to fill TIS-III (Annexure ‘A’).</p>

          </div>
          }
          {this.state.value === "2" && 
          <div>
            <p>The scheme is open to all the students of the University who fulfill the eligibility criteria as laid down herein below.</p>
            <p>Eligibility Criteria</p>
            <ul style={{"color":"black"}}>
              <li>1. Students who are eligible but could not receive financial support under the Merit cum Means linked financial support scheme of Government of Delhi are eligible to apply under this scheme</li>
              <li>2. The student should be enrolled for an undergraduate programme of the University.</li>
              <li>3. The student’s family should hold a family Income Certificate issued by the SDM or any other officer authorized in this behalf by the Revenue Department regarding the total annual income of the family. The date mentioned on the Income Certificate should be valid as per the Govt. norms on the date issue of the notice of FWS Scheme.</li>
              <li>4. The student should fulfill the income/ economic criteria as mentioned below:
              Eligibility
              (Gross Annual Family Income of Student from all Sources)
              Percentage of Financial
              Assistance in University fees
              and Tuition Fee
              Upto Rs. 2 Lac p.a 100%
              Above Rs. 2 Lac p.a but not exceeding
              Rs. 4 Lac p.a
              50%
              Above Rs. 4 Lac p.a but not exceeding Rs. 6 Lac p.a 25%
              Above Rs.6 Lac p.a but not exceeding Rs. 8 Lac p.a 10%
              </li>
              <li>5. There may be cases where an applicant has availed partial assistance/support from the GNCTD scheme or from other source of the government. In such cases, the amount of financial assistance to be provided by the University shall be restricted by deducting the amount of financial assistance already availed by the applicant through some other government source. A declaration as per Annexure ‘B’ ‘by the student  affirming the amount of financial support being received from any other scheme/agency for meeting the cost of education for the course/programme has to be submitted.</li>
            </ul>
          </div>
          }
          {this.state.value === "3" && <p  style={{"color":"black"}}> In the event of death of earning
parent(s), the student should submit to the office of Dean Students welfare, the duly signed form by the Head
of department in Annexure’C’ alongwith necessary documents within 90 days of death</p>}

					<button
						style={{
							...mainStyle.button,
							margin: 0,
							width: "auto",
							marginTop: 10
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal>
              
             
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default Services;
