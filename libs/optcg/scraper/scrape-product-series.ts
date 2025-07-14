import { CheerioAPI, fromURL } from 'cheerio';

/**
 * Here is what we want to be parsing
 *
 *                 <select name="series" class="selectModal" id="series">
 *                   <option value>Recording</option>
 *                   <option value>ALL</option>
 *                   <option value="569301" >PREMIUM BOOSTER &lt;br class=&quot;spInline&quot;&gt;-ONE PIECE CARD THE BEST- [PRB-01]</option>
 *                   <option value="569202" >EXTRA BOOSTER &lt;br class=&quot;spInline&quot;&gt;-Anime 25th Collection- [EB-02]</option>
 *                   <option value="569201" >EXTRA BOOSTER &lt;br class=&quot;spInline&quot;&gt;-MEMORIAL COLLECTION- [EB-01]</option>
 *                   <option value="569111" selected>BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-A FIST OF DIVINE SPEED- [OP-11]</option>
 *                   <option value="569110" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-ROYAL BLOOD- [OP-10]</option>
 *                   <option value="569109" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-EMPERORS IN THE NEW WORLD- [OP-09]</option>
 *                   <option value="569108" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-TWO LEGENDS- [OP-08]</option>
 *                   <option value="569107" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-500 YEARS IN THE FUTURE- [OP-07]</option>
 *                   <option value="569106" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-WINGS OF THE CAPTAIN- [OP-06]</option>
 *                   <option value="569105" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-AWAKENING OF THE NEW ERA- [OP-05]</option>
 *                   <option value="569104" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-KINGDOMS OF INTRIGUE- [OP-04]</option>
 *                   <option value="569103" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-PILLARS OF STRENGTH- [OP-03]</option>
 *                   <option value="569102" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-PARAMOUNT WAR- [OP-02]</option>
 *                   <option value="569101" >BOOSTER PACK &lt;br class=&quot;spInline&quot;&gt;-ROMANCE DAWN- [OP-01]</option>
 *                   <option value="569028" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-GREEN/YELLOW Yamato- [ST-28]</option>
 *                   <option value="569027" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-BLACK Marshall.D.Teach- [ST-27]</option>
 *                   <option value="569026" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-PURPLE/BLACK Monkey.D.Luffy- [ST-26]</option>
 *                   <option value="569025" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-BLUE Buggy- [ST-25]</option>
 *                   <option value="569024" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-GREEN Jewelry Bonney- [ST-24]</option>
 *                   <option value="569023" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-RED Shanks- [ST-23]</option>
 *                   <option value="569021" >STARTER DECK EX &lt;br class=&quot;spInline&quot;&gt;-GEAR5- [ST-21]</option>
 *                   <option value="569020" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Yellow Charlotte Katakuri- [ST-20]</option>
 *                   <option value="569019" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Black Smoker- [ST-19]</option>
 *                   <option value="569018" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Purple Monkey.D.Luffy- [ST-18]</option>
 *                   <option value="569017" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Blue Donquixote Doflamingo- [ST-17]</option>
 *                   <option value="569016" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Green Uta- [ST-16]</option>
 *                   <option value="569015" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Red Edward.Newgate- [ST-15]</option>
 *                   <option value="569014" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-3D2Y- [ST-14]</option>
 *                   <option value="569013" >ULTRA DECK &lt;br class=&quot;spInline&quot;&gt;-The Three Brothers- [ST-13]</option>
 *                   <option value="569012" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Zoro and Sanji- [ST-12]</option>
 *                   <option value="569011" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Uta- [ST-11]</option>
 *                   <option value="569010" >ULTRA DECK &lt;br class=&quot;spInline&quot;&gt;-The Three Captains- [ST-10]</option>
 *                   <option value="569009" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Yamato- [ST-09]</option>
 *                   <option value="569008" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Monkey D. Luffy- [ST-08]</option>
 *                   <option value="569007" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Big Mom Pirates- [ST-07]</option>
 *                   <option value="569006" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Absolute Justice- [ST-06]</option>
 *                   <option value="569005" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-ONE PIECE FILM edition- [ST-05]</option>
 *                   <option value="569004" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Animal Kingdom Pirates- [ST-04]</option>
 *                   <option value="569003" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-The Seven Warlords of the Sea- [ST-03]</option>
 *                   <option value="569002" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Worst Generation- [ST-02]</option>
 *                   <option value="569001" >STARTER DECK &lt;br class=&quot;spInline&quot;&gt;-Straw Hat Crew- [ST-01]</option>
 *                   <option value="569901" >Promotion card</option>
 *                   <option value="569801" >Other Product Card</option>
 *                 </select>
 */



export async function getAllSeries() {
  const response = await fromURL(`https://en.onepiece-cardgame.com/cardlist/?series=569111`);

  const allOptions = extractOptions(response);

  return allOptions.result.options;
}



function extractOptions(data: CheerioAPI) {
  return data.extract({
    result: {
      selector: '#series',
      value: {
        options: [{
          selector: 'option',
          value: (el, key) => {
            const seriesId = data(el).attr('value');
            return{
              seriesId,
              name: data(el).text().replace('<br class=\"spInline\">', '')
            }
          }
        }]
      }
    }
  })
}
