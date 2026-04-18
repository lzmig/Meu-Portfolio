function handleSubmit(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            if (!nome || !email || !mensagem) return;
            window.location.href = `mailto:luizmiguelbernardo.lzm12@gmail.com?subject=Contato de ${nome}&body=${mensagem}%0A%0AEmail: ${email}`;  
        }