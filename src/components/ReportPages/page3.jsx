import React, { useContext, useEffect } from 'react';
import { AppContext } from "../../AppContext";
import { useParams } from 'react-router-dom';


const ReportPage3 = () => {
  console.log(useContext(AppContext));
  const { testData, fetchTestData } = useContext(AppContext);
  const { patient_uid, transaction_id, name, dob } = useParams(); // Extract URL parameters

  useEffect(() => {

      console.log("YEs");
      // fetchTestData('patient_uid', 'transaction_id');
      fetchTestData('4936972e-4a9c-4f3a-b477-7d7a0118b631', '8538f3b4-2e3d-425e-a23a-46b46bb30562');
  }, []);
  console.log(testData);
  console.log(testData["Focal Point IOU"]);
  return (
    <div className="report-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

        .report-page {
          width: 100%;
          height: auto;
          margin: 0 auto;
          background-color: #1b0238;
          padding: 80px;
          color: white;
          font-family: 'Raleway', sans-serif;
        }

        .title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

          .section {
            display: flex;
            flex-direction: row;
            background-color: #593E6754;
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 30px;
            width: 100%;
            max-width: 1200px;
            height: auto;
            align-items: center;
            justify-content: center;
            opacity: 1;
            margin-left: auto;
            margin-right: auto;
          }

        .section-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
        }

        .icon {
          width: 219px;
          height: 183px;
          background-size: cover;
          margin-bottom: 10px;
          opacity: 1;
        }

        .attention-icon {
          background-image: url('/src/assets/ReportPage3-img1.png');
        }

        .communication-icon {
          background-image: url('/src/assets/ReportPage3-img2.png');
        }

        .sensory-icon {
          background-image: url('/src/assets/ReportPage3-img3.png');
        }

        .speech-icon {
          background-image: url('/src/assets/ReportPage3-img4.png');
        }

        .small-title-box {
          background-color: #DF74FF;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-communication {
          background-color: #6567F9;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-sensory {
          background-color: #D1890B;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-speech {
          background-color: #FB6B91;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .section-right {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 25px;
          padding: 20px;
          border-radius: 10px;
        }

        .progress-bar {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .bar {
          position: relative;
          width: 80%;
          height: 40px;
          background-color: #562b7f;
          border-radius: 15px;
          overflow: hidden;
          margin-right: 10px;
        }

        .fill {
          height: 100%;
          background-color: #DF74FF;
          border-radius: 15px;
          position: relative;
        }

        .fill-communication {
          height: 100%;
          background-color: #6567F9;
          border-radius: 15px;
          position: relative;
        }

        .fill-sensory {
          height: 100%;
          background-color: #D1890B;
          border-radius: 15px;
          position: relative;
        }

        .fill-speech {
          height: 100%;
          background-color: #FB6B91;
          border-radius: 15px;
          position: relative;
        }

        .percentage-circle {
          position: absolute;
          right: -5px;
          top: 2px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #F6E8FB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #562b7f;
          font-size: 0.8rem;
          font-weight: bold;
          font-family: 'Raleway', sans-serif;
        }

        .label {
          position: absolute;
          left: 2px;
          top: 5px;
          color: white;
          font-weight: light;
          font-family: 'Raleway', sans-serif;
        }
      `}</style>

      <h2 className="title">Developmental Skills Summary</h2>

      <div className="section">
        <div className="section-left">
          <div className="icon attention-icon" />
          <div className="small-title-box">Eye Movements</div>
        </div>

        {/* <div className="section-right">
        <ProgressBar label="Attention Span" value={testData["Focal Point IOU"]} />
          <ProgressBar label="Social Attention" value="30%" />
          <ProgressBar label="Attention to Speech" value="31%" />
          <ProgressBar label="Visual Speed Detection" value="32%" />
          <ProgressBar label="Gaze Estimation" value="32%" />
          <ProgressBar label="Eye Tracking" value="32%" />
        </div>
      </div> */}
        <div className="section-right">
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Focal Point IOu </span>
        <ProgressBar label="" value={testData["Focal Point IOU"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Joint Attention Error (%) </span>
        <ProgressBar label="" value={testData["Joint Attention Error (%)"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Eye Contact Error </span>
        <ProgressBar label="" value={testData["Eye Contact Error"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Gaze Dispersion (pixels) </span>
        <ProgressBar label="" value={testData["Gaze Dispersion (pixels)"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Gaze Speed (px/sec) </span>
        <ProgressBar label="" value={testData["Gaze Speed (px/sec)"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Screen Focus (%) </span>
        <ProgressBar label="" value={testData["Screen Focus (%)"]+"%"} />
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Gaze Holds </span>
      <ProgressBar label="" value={testData["Gaze Holds"]+"%"} />
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Saccades (per second) </span>
      <ProgressBar label="" value={testData["Saccades (per second)"]+"%"} />
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Object Tracking Error (px) </span>
      <ProgressBar label="" value={testData["Object Tracking Error (px)"]+"%"} />
        </div>
      </div>

      <div className="section">
        <div className="section-left">
          <div className="icon communication-icon" />
          <div className="small-title-box small-title-box-communication">Social Interaction & Communication</div>
        </div>

        {/* <div className="section-right">
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Eye Contact </span>
          <ProgressBar label="" value="30%" customClass="fill-communication" />
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Pointing </span>
          <ProgressBar label="" value="40%" customClass="fill-communication" />
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Gesture Communication </span>
          <ProgressBar label="" value="35%" customClass="fill-communication" />
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Joint Attention </span>
          <ProgressBar label="" value="30%" customClass="fill-communication" />
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Response to Name Call </span>
          <ProgressBar label="" value="32%" customClass="fill-communication" />
          <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Facing Forward </span>
          <ProgressBar label="" value="35%" customClass="fill-communication" />
        </div>
      </div> */}

      <div className="section-right">
      
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Social Preference (%) </span>
      <ProgressBar label="" value={testData["Social Preference (%)"]+"%"} customClass="fill-communication"/>
      
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> LipSync Recognisability (%) </span>
      <ProgressBar label="" value={testData["LipSync Recognisability (%)"]+"%"} customClass="fill-communication"/>
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> Convo Recognisability (%) </span>
      <ProgressBar label="" value={testData["Convo Recognisability (%)"]+"%"} customClass="fill-communication"/>
        </div>
      </div>

      <div className="section">
        <div className="section-left">
          <div className="icon sensory-icon" />
          <div className="small-title-box small-title-box-sensory">Sensory and Motor Skills</div>
        </div>

        <div className="section-right">
        <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> meanYaw (deg/sec) </span>
        <ProgressBar label="" value={testData["meanYaw (deg/sec)"]+"%"} customClass="fill-communication"/>
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> meanPitch (deg/sec) </span>
      <ProgressBar label="" value={testData["meanPitch (deg/sec)"]+"%"} customClass="fill-communication"/>
      <span style={{ marginBottom: "-20px", fontWeight: "700", fontSize: "20px", fontFamily: "sans-serif" }}> meanRoll (deg/sec) </span>
      <ProgressBar label="" value={testData["meanRoll (deg/sec)"]+"%"} customClass="fill-communication"/>
        </div>
      </div>

      {/* <div className="section">
        <div className="section-left">
          <div className="icon speech-icon" />
          <div className="small-title-box small-title-box-speech">Speech and Auditory Processing</div>
        </div>

        <div className="section-right">
          <ProgressBar label="Speech Detection" value="30%" customClass="fill-speech" />
          <ProgressBar label="Quality of Vocalization" value="40%" customClass="fill-speech" />
          <ProgressBar label="Emotion Recognition" value="35%" customClass="fill-speech" />
          <ProgressBar label="Motherese vs Traffic" value="30%" customClass="fill-speech" />
          <ProgressBar label="Motherese vs Techno" value="32%" customClass="fill-speech" />
        </div>
      </div> */}
    </div>
  );
};

const ProgressBar = ({ label, value, customClass }) => {
  return (
    <div className="progress-bar">
      <div className="bar">
        <div className={customClass || "fill"} style={{ width: value }}>
          <div className="percentage-circle">{value}</div>
          <div className="label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage3;
