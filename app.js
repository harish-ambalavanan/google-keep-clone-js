class App {
    constructor() {
      this.$form = document.querySelector('#form');
      this.$noteTitle = document.querySelector('#note-title')
      this.$noteContent = document.querySelector('#note-text')
      this.$formButtonsDiv = document.querySelector('#form-buttons')
      this.$submit = document.querySelector('#submit-button')
      this.$close = document.querySelector('#form-close-button')
      this.notes = []
      this.addEventListeners();
    }
    
    addEventListeners() {
      document.body.addEventListener('click', event => {
        if(event.target === this.$submit || event.target === this.$close){
            event.preventDefault()
            this.closeForm()
        }else{
            this.handleFormClick(event);
        }
      });
    }
    

    handleFormClick(event) {
      const isFormClicked = this.$form.contains(event.target);       
      if (isFormClicked) {
        this.openForm()
      } else {
          this.closeForm()
      }
    }

    openForm() {
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block'
        this.$formButtonsDiv.style.display = 'block'
    }
    closeForm(){
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none'
        this.$formButtonsDiv.style.display = 'none'
        this.handleSubmitClick()
    }

    handleSubmitClick(){        
        const noteContent = this.$noteContent.value
        const noteTitle = this.$noteTitle.value
        if(noteContent){
            //render the note on page
            const note = {
                noteTitle: noteTitle,
                noteContent: noteContent
            }
            this.notes.push(note)
            this.renderNote(note)
            console.log(this.notes)
        }else{

        }
    }

    renderNote(){
        
    }
  }
  
  new App();
  