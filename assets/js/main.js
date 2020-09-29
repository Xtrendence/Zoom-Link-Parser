document.addEventListener("DOMContentLoaded", () => {
	let textareaInvitationLink = document.getElementById("invitation-link");
	let buttonParse = document.getElementById("parse");
	let inputToken = document.getElementById("token");
	let inputMeetingID = document.getElementById("meeting-id");
	let inputPassword = document.getElementById("password");

	buttonParse.addEventListener("click", () => {
		if(textareaInvitationLink.value.trim() !== "") {
			let url = new URL(textareaInvitationLink.value);
			let token = url.searchParams.get("tk");
			let meetingID = url.pathname.replace("/w/", "");
			let password = url.searchParams.get("pwd");

			inputToken.value = token;
			inputMeetingID.value = meetingID;
			inputPassword.value = password;
		}
	});
});