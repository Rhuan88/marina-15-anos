const dados = {
      nome: "Marina",
        data: "2026-07-25T19:00:00-03:00",
          local: "Zameee Festas",
            cidade: "Gravataí - RS",
              maps: "https://maps.google.com/?q=RS-020+2011+Gravatai",
                whatsapp: "5551980540658"
                };

    document.getElementById('nome').innerText = data.nome;
      document.getElementById('local').innerText = data.local;
        document.getElementById('cidade').innerText = data.cidade;
          document.getElementById('mapsBtn').href = data.maps;

            atualizarContador();
              setInterval(atualizarContador, 1000);
              });

              /* CONTADOR */
              function atualizarContador(){
                const alvo = new Date(dados.data);
                  const agora = new Date();

                    let diff = alvo - agora;
                      if(diff < 0) diff = 0;

                        const d = Math.floor(diff / 86400000);
                          const h = Math.floor(diff / 3600000) % 24;
                            const m = Math.floor(diff / 60000) % 60;
                              const s = Math.floor(diff / 1000) % 60;

                                dias.innerText = d;
                                  horas.innerText = h;
                                    min.innerText = m;
                                      seg.innerText = s;
                                      }

                                      /* WHATSAPP */
                                      function confirmar(){
                                        const nome = document.getElementById('nomeConvidado').value;

                                          if(!nome){
                                              alert("Digite seu nome");
                                                  return;
                                                    }

                                                      const msg = `Olá! Confirmo presença na festa da ${dados.nome}. Nome: ${nome}`;
                                                        const url = `https://wa.me/${dados.whatsapp}?text=${encodeURIComponent(msg)}`;

                                                          window.open(url, '_blank');
                                                          }

                                                          /* ANIMAÇÃO */
                                                          const obs = new IntersectionObserver(entries=>{
                                                            entries.forEach(e=>{
                                                                if(e.isIntersecting){
                                                                      e.target.classList.add('show');
                                                                          }
                                                                            });
                                                                            });

                                                                            document.querySelectorAll('.fade').forEach(el=>obs.observe(el));