import { CheerioAPI, fromURL, load } from 'cheerio';

export async function getCardInfo() {
  const response = await fromURL('https://en.onepiece-cardgame.com/cardlist/?series=569111');

  const results = extractResults(response);

  const parsedResults = [];

  for (const result of results.results) {
    const content = result.content;
    const cardInfo = extractInfo(content);
    const cardName = extractName(content);
    const cardCost = extractCost(content);
    const cardAttribute = extractAttribute(content);
    const cardPower = extractPower(content);
    const cardCounter = extractCounter(content);
    const cardColor = extractColor(content);
    const cardBlock = extractBlock(content);
    const cardType = extractType(content);
    const cardText = extractText(content);
    const cardTrigger = extractTrigger(content);

    parsedResults.push( {
      uniqueId: result.uniqueId,
      ...cardInfo.info,
      name: cardName.name,
      cost: cardCost.result,
      attribute: cardAttribute.attribute,
      power: cardPower.result,
      counter: cardCounter.result,
      color: cardColor.result,
      block: cardBlock.result,
      type: cardType.result,
      text: cardText.text,
      trigger: cardTrigger.result
    });
  }

  return {
    productCode: '569111',
    productId: '',
    productName: '',
    productType: '',
    cards: parsedResults

  };
}


function extractResults(data: CheerioAPI) {
  return data.extract({
    results: [{
      selector: '.modalCol',
      value: (el, key) => {
        const elId = data(el).attr('id');
        return {
          uniqueId: elId,
          content: load(el)
        }
      }
    }]
  })
}

function extractInfo(data: CheerioAPI) {
  return data.extract({
    info: {
      selector: '.infoCol',
      value: {
        id: 'span:first',
        rarity: 'span:eq(1)',
        category: 'span:eq(2)',
      }
    }
  })
}

function extractName(data: CheerioAPI) {
  return data.extract({
    name: '.cardName'
  })
}

function extractCost(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.cost')
}

function extractAttribute(data: CheerioAPI) {
  return data('.attribute').extract({
    attribute: 'i'
  })
}

function extractPower(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.power')
}
function extractCounter(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.counter')
}
function extractColor(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.color')
}
function extractBlock(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.block')
}
function extractType(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.feature')
}
function extractTrigger(data: CheerioAPI) {
  return extractOnlyTextChild(data, '.trigger')
}

function extractText(data: CheerioAPI) {
  return data.extract({
    text: '.text'
  })
}


function extractOnlyTextChild(data: CheerioAPI, selector: string) {
  return data.extract({
    result: {
      selector: selector,
      value: (el, key) => {
        return data(el).clone().children().remove().end().text()
      }
    }
  })
}
