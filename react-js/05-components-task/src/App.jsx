import ButtonIcon from "./components/ButtonIcon";
import CardWithImage from "./components/CardWithImage";

const App = () => {
  return (
    <div className="bg-white bg-opacity-45 shadow-lg shadow-gray-700 m-5 rounded p-5">
          <div>
              <h3 className="font-guerrilla text-4xl text-center text-blaxk tracking-wider">Learn any language</h3>
          </div>
          <div className="flex items-center space-x-4">
              <div>
              <img src="https://miro.medium.com/v2/resize:fit:1358/1*JKFVLEBBYK3byznjDLAk-g.png" alt="hello image" className="w-90 h-90 object-contain m-5" />
              </div>
        <div className="flex-col items-center space-y-6">
        <div>
              <p className="text-xl text-black flex-col italic space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179" /></svg>If you talk to a man in a language, he understands, it goes to his head. If you talk in him in his langauges, that goes to his heart
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311C9.591 12.323 8.17 10.842 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"/></svg></p>
              <small className="italic m-4 text-lg">- Nelson Mandela</small>
          </div>
          <div>
          <ButtonIcon/>
        </div>
            </div>
      
      </div>
      <div className="grid grid-cols-3 gap-y-4 items-center">
        <CardWithImage img="https://cdn.filestackcontent.com/KnBxJ5rwQ8OQe0H8lOGx" plan="$2 per month" desc="✔ 7-days free trail"
                   desc2=" ✔ Daily online challenges"/>
        <CardWithImage img="https://nakito.com.my/wp-content/uploads/2020/07/gold-600x600.png" plan="$200 per month" desc="✔ Six-month training"
                   desc2=" ✔ Work book online"/>
        <CardWithImage img="https://laflarepr.com/cdn/shop/products/platinumelite.png?v=1652409503" plan="$500 per month" desc="✔ Skilled person to train and practice more"
                   desc2=" ✔ Available pdf for work book"/>
      </div>
    </div>
  );
};

export default App;
