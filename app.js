let more = document.querySelector('.more'),
        descriptionBtn = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        function openPopup() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

        function clossePopup() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        }

        more.addEventListener('click', openPopup); 
        descriptionBtn.addEventListener('click', openPopup);       

        close.addEventListener('click', clossePopup);

        overlay.addEventListener('click', clossePopup);