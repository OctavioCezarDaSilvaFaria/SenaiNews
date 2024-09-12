import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-black p-2">
        <h1 className="text-white font-black text-xl">SenaiNews </h1>
        <nav className="flex gap-20">
        <a className="text-white font-black" href="#">Home</a>
        <a className="text-white font-black" href="#">Sobre</a>
        <a className="text-white font-black" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-8 flex-1">
        <h2 className="mt-8 flex justify-center mb-8 font-black text-6xl">PRINCIPAIS NOTÍCIAS</h2>
        <div className="flex justify-around flex-wrap gap-4">
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80 ">
            <img src="https://s2-ge.glbimg.com/mdOw21C819wVTdB-P4G29oklk1M=/0x70:828x723/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/6/aMccrOSAmFQ67JWgXPlg/rivais-zoam-o-palmeiras-apos-perder-o-mundial-para-o-chelsea.jpg" alt="" />
            <h3>Palmeiras Ganhou Mundial!!!!!!!!!!!!</h3>
            <p>Fizero a Boa KRAIIIIIIIIIIIIIIIIIIIIIIII!!!!!</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://pbs.twimg.com/media/EoKC6_nXYAAczFg.jpg" alt="" />
            <h3>Matuê escreve Deus com d minúsculo e vira kombi no interior de São Paulo</h3>
            <p>Imagens flagradas por moradores do local</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlRCeU2LcCxBvQKFGUnVM61jZY0Q7NOj1aw&s" alt="" />
            <h3>Cachorro é contratado para ser frentista do posto Ipiranga</h3>
            <p>As vendas de gasolina aumentaram muito!</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://pbs.twimg.com/media/ELCFgshWoAAJeaH.jpg" alt="" />
            <h3>Gato assassina cachorros no interior de Minas</h3>
            <p>Os donos das vítmas estão querendo justiça!</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEY7hS3OYu-t1GXgg8kwPyJKlSBOcPMNWM8Q44UMIhem4B-pZioa8ZM8N4mgFWubejDY&usqp=CAU" alt="" />
            <h3>Criatura misteriosa é flagrada andando pelas ruas de Belo Horizonte</h3>
            <p>Moradores estão temendo pelas suas vidas</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-30-at-15.26.09-1.jpeg" alt="" />
            <h3>Frango esquece que está morto e anda pelo super mercado Savegnago</h3>
            <p>Os consumidores estão aterrorizados</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/2810-taylor-sayajin-1.png" alt="" />
            <h3>Taylor Swift se tranforma em super sayajin durante show</h3>
            <p>As pessoas presentes levantam as mãos para a genkidama</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-black w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2021/04/correio-sex-nova-foto_Easy-Resize.com_.jpg" alt="" />
            <h3>Correios mudaram seu método de entregas</h3>
            <p>Jovem  "Queria uma carta, ganhei um grande amor"</p>
            <a className="bg-black p-2 text-white w-full text-center font-semibold" href="" alt="">Ver Mais</a>
          </div>
        </div>
      </main>

      <footer className="bg-black p-2 text-center mt-4">
        <h4 className="text-white">Todos os direitos reservados - &copy; 2024</h4>
      </footer>
    </div>
  );
}

export default App;
