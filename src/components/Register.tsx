import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, supabase } from "../firebase_config";
import { uid } from "uid";
function Register() {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionImage, setTransactionImage] = useState<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    collegeName: "",
    member1Name: "",
    member1Phone: "",
    member2Name: "",
    member2Phone: "",
    member3Name: "",
    member4Name: "",
    member3Phone: "",
    transactionID: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamDetails({ ...teamDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setTransactionImage(e.target.files[0]);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const saveFormData = async (url) => {
    try {
      // Replace 'eventCollection' with the specific event's collection name
      const docRef = await addDoc(collection(db, "cyberthon"), {
        teamName: teamDetails.teamName,
        name: teamDetails.leaderName,
        contact: teamDetails.leaderPhone,
        email: teamDetails.leaderEmail,
        college: teamDetails.collegeName,
        member2: teamDetails.member1Name,
        member3: teamDetails.member2Name,
        member4: teamDetails.member3Name,
        member5: teamDetails.member4Name,
        transactionID: teamDetails.transactionID,
        screenshotUrl: url,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation: Ensure team name and leader details are filled out
    if (
      !teamDetails.teamName ||
      !teamDetails.leaderName ||
      !teamDetails.leaderPhone ||
      !teamDetails.leaderEmail ||
      !transactionImage ||
      !teamDetails.transactionID
    ) {
      alert("Please fill out all required fields.");
    } else {
      // If form is valid, show success alert
      setIsSubmitting(true);

      // Upload the image to Firebase Storage
      async function uploadFile() {
        const UID = uid();
        const { data, error } = await supabase.storage
          .from("screenshots")
          .upload(UID, transactionImage);
        if (error) {
          console.error("Upload error:", error);
          setIsSubmitting(false);
        } else {
          const { data: data2, error } = await supabase.storage
            .from("screenshots")
            .createSignedUrl(UID, 100000000);

          const downloadURL = data2?.signedUrl;

          await saveFormData(downloadURL);
          setIsSubmitting(false);
          setTeamDetails({
            teamName: "",
            leaderName: "",
            leaderPhone: "",
            leaderEmail: "",
            collegeName: "",
            member1Name: "",
            member1Phone: "",
            member2Name: "",
            member2Phone: "",
            member3Name: "",
            member4Name: "",
            member3Phone: "",
            transactionID: "",
          });
          setTransactionImage(null);
        }
      }
      uploadFile();
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-24 sm:mt-10 mb-56 sm:mb-0">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form className="w-full max-w-7xl p-5 rounded-lg" onSubmit={handleSubmit}>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Name */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="teamName"
            >
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="teamName"
              type="text"
              name="teamName"
              value={teamDetails.teamName}
              onChange={handleInputChange}
              placeholder="Enter your team name"
              required
            />
          </div>

          {/* Team Leader Name */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="leaderName"
            >
              Team Leader Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="leaderName"
              type="text"
              name="leaderName"
              value={teamDetails.leaderName}
              onChange={handleInputChange}
              placeholder="Enter team leader name"
              required
            />
          </div>

          {/* Team Leader Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="leaderPhone"
            >
              Phone Number (Team Leader) <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="leaderPhone"
              type="text"
              name="leaderPhone"
              value={teamDetails.leaderPhone}
              onChange={handleInputChange}
              placeholder="Enter team leader phone number"
              required
            />
          </div>

          {/* Team Leader Email */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="leaderEmail"
            >
              Email (Team Leader) <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="leaderEmail"
              type="email"
              name="leaderEmail"
              value={teamDetails.leaderEmail}
              onChange={handleInputChange}
              placeholder="Enter team leader email"
              required
            />
          </div>

          {/* College Name */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="collegeName"
            >
              College Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="collegeName"
              type="text"
              name="collegeName"
              value={teamDetails.collegeName}
              onChange={handleInputChange}
              placeholder="Enter college name"
              required
            />
          </div>

          {/* Member 1 Name */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="member1Name"
            >
              Member 2 Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member1Name"
              type="text"
              name="member1Name"
              value={teamDetails.member1Name}
              onChange={handleInputChange}
              placeholder="Enter member 2 name"
            />
          </div>

          {/* Member 1 Phone */}
          {/* <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="member1Phone"
            >
              Member 1 Phone Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member1Phone"
              type="text"
              name="member1Phone"
              value={teamDetails.member1Phone}
              onChange={handleInputChange}
              placeholder="Enter member 1 phone number"
            />
          </div> */}

          {/* Member 2 Name */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="member2Name"
            >
              Member 3 Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member2Name"
              type="text"
              name="member2Name"
              value={teamDetails.member2Name}
              onChange={handleInputChange}
              placeholder="Enter member 3 name"
            />
          </div>

          {/* Member 2 Phone */}
          {/* <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="member2Phone"
            >
              Member 2 Phone Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member2Phone"
              type="text"
              name="member2Phone"
              value={teamDetails.member2Phone}
              onChange={handleInputChange}
              placeholder="Enter member 2 phone number"
            />
          </div> */}

          {/* Member 3 Name */}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="member3Name"
            >
              Member 4 Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member3Name"
              type="text"
              name="member3Name"
              value={teamDetails.member3Name}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>

          {/* Member 3 Phone */}
          {/* <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="member3Phone"
            >
              Member 3 Phone Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="member3Phone"
              type="text"
              name="member3Phone"
              value={teamDetails.member3Phone}
              onChange={handleInputChange}
              placeholder="Enter member 3 phone number"
            />
          </div> */}
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="transactionID"
            >
              Transaction ID <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="transactionID"
              type="text"
              name="transactionID"
              value={teamDetails.transactionID}
              onChange={handleInputChange}
              placeholder="Transaction ID"
              required
            />
          </div>
        </div>

        {/* Button to open the modal */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-black border border-white text-white rounded-md hover:bg-zinc-700"
            onClick={handleOpenModal}
          >
            Payment QR
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <div>
            <div className=" w-full h-24 border-2 rounded-sm">
              <label
                className=" mb-2 text-sm font-medium text-white w-full h-full cursor-pointer flex flex-col justify-center items-center"
                htmlFor="file_input"
              >
                <input
                  className="hidden w-full h-full"
                  id="file_input"
                  type="file"
                  onChange={handleFileChange}
                  required
                />
                <h6 className="text-center p-4">
                  Drop Your Payment Screenshot Here{" "}
                  <span className="text-red-500">*</span>
                </h6>

                {transactionImage && (
                  <h1 className="text-base">
                    Uploded File : {transactionImage?.name}
                  </h1>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-4 py-2 bg-black border border-white text-white rounded-md hover:bg-zinc-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Payment QR Code</h2>
            <div className="mt-4">
              {
                <div>
                  <img src="/QR.jpeg" alt="QR code" className="w-full h-auto" />
                </div>
              }
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
