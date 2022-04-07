


function klickPopUp(e) {
	const modalElement = document.getElementById("modalContent")
	var myModal = new bootstrap.Modal(modalElement, {
	  keyboard: false
	})
	
	const hiddenContentId =  e.currentTarget.getAttribute("data-hidden-content")
	const content = document.getElementById(hiddenContentId).innerHtml

	modalElement.getElementsByClassName("modal-body")[0].innerHtml = content
	myModal.show()
}