
let onehundredyearsshort = 'The inhabitants of Macondo found themselves lost is their own streets, confused by thecrowded fair. Holding a child by each hand so as not to lose them in the tumult, bumping into acrobats with gold-capped teeth and jugglers with six arms, suffocated by the mingled breath of manure and sandals that the crowd exhaled, José Arcadio Buendía went about everywhere like a madman, looking for Melquíades so that he could reveal to him the infinite secrets of that fabulous nightmare. He asked several gypsies, who did not understand his language. Finally he reached the place where Melquíades used to set up his tent and he found a taciturn Armenian who in Spanish was hawking a syrup to make oneself invisible. He had drunk down a glass of the amber substance in one gulp as José Arcadio Buendía elbowed his way through the absorbed group that was witnessing the spectacle, and was able to ask his question. The gypsy wrapped him in the frightful climate of his look before he turned into a puddle of pestilential and smoking pitch over which the echo of his reply still floated: “Melquíades is dead." Upset by the news, José Arcadio Buendía stood motionless, trying to rise above his affliction, until the group dispersed, called away by other artifices, and the puddle of the taciturn Armenian evaporated completely. Other gypsies confirmed later on that Melquíades had in fact succumbed to the fever on the beach at Singapore and that his body had been thrown into the deepest part of the Java Sea. The children had no interest in the news. They insisted that their father take them to see the overwhelming novelty of the sages of Memphis that was being advertised at the entrance of a tent that, according to what was said, had belonged to King Solomon. They insisted so much that José Arcadio Buendía paid the thirty reales and led them into the center of the tent, where there was a giant with a hairy torso and a shaved head, with a copper ring in his nose and a heavy iron chain on his ankle, watching over a pirate chest. When it was opened by the giant, the chest gave off a glacial exhalation. Inside there was only an enormous, transparent block with infinite internal needles in which the light of the sunset was broken up into colored stars. Disconcerted, knowing that the children were waiting for an immediate explanation, José Arcadio Buendía ventured a murmur: "It\'s the largest diamond in the world." "No" the gypsy countered. "It\'s ice." José Arcadio Buendía, without understanding, stretched out his hand toward the cake, but the giant moved it away. "Five reales more to touch it," he said. José Arcadio Buendía paid them and put his hand on the ice and held it there for several minutes as his heart filled with fear and jubilation at the contact with mystery. Without knowing what to say, he paid ten reales more so that his sons could have that prodigious experience. Little José Arcadio refused to touch it. Aureliano, on the other hand, took a step forward and put his hand on it, withdrawing it immediately. "It\'s boiling," he exclaimed, startled. But his father paid no attention to him. Intoxicated by the evidence of the miracle, he forgot at that moment about the frustration of his delirious undertakings and Melquíades\' body, abandoned to the appetite of the squids. He paid another five reales and with his hand on the cake, as if giving testimony on the holy scriptures, he exclaimed: "This is the great invention of our time."'

let stopwords = ["a", "able", "about", "above", "abst", "accordance", "according", "accordingly", "across", "act", "actually", "added", "adj", "affected", "affecting", "affects", "after", "afterwards", "again", "against", "ah", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "apparently", "approximately", "are", "aren", "arent", "arise", "around", "as", "aside", "ask", "asking", "at", "auth", "available", "away", "awfully", "b", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "between", "beyond", "biol", "both", "brief", "briefly", "but", "by", "c", "ca", "came", "can", "cannot", "can't", "cause", "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing", "contains", "could", "couldnt", "d", "date", "did", "didn't", "different", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "due", "during", "e", "each", "ed", "edu", "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "especially", "et", "et-al", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "except", "f", "far", "few", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "for", "former", "formerly", "forth", "found", "four", "from", "further", "furthermore", "g", "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "had", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "hed", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "hereupon", "hers", "herself", "hes", "hi", "hid", "him", "himself", "his", "hither", "home", "how", "howbeit", "however", "hundred", "i", "id", "ie", "if", "i'll", "im", "immediate", "immediately", "importance", "important", "in", "inc", "indeed", "index", "information", "instead", "into", "invention", "inward", "is", "isn't", "it", "itd", "it'll", "its", "it's", "itself", "i've", "j", "just", "k", "keep	keeps", "kept", "kg", "km", "know", "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "'ll", "look", "looking", "looks", "ltd", "m", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "mug", "must", "my", "myself", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "now", "nowhere", "o", "obtain", "obtained", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "omitted", "on", "once", "one", "ones", "only", "onto", "or", "ord", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "owing", "own", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "re", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "s", "said", "same", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "she", "shed", "she'll", "shes", "should", "shouldn't", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure	t", "take", "taken", "taking", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'll", "theyre", "they've", "think", "this", "those", "thou", "though", "thoughh", "thousand", "throug", "through", "throughout", "thru", "thus", "til", "tip", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "ts", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon", "ups", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "v", "value", "various", "'ve", "very", "via", "viz", "vol", "vols", "vs", "w", "want", "wants", "was", "wasnt", "way", "we", "wed", "welcome", "we'll", "went", "were", "werent", "we've", "what", "whatever", "what'll", "whats", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "widely", "willing", "wish", "with", "within", "without", "wont", "words", "world", "would", "wouldn't", "www", "x", "y", "yes", "yet", "you", "youd", "you'll", "your", "youre", "yours", "yourself", "yourselves", "you've", "z", "zero",];

let wordArr = [];
let stopArr = [];

document.addEventListener("DOMContentLoaded", function(event) {

  stopWordsToArrs(onehundredyearsshort);

  // let elem = document.getElementById('nostopwords');
  document.getElementById('jitter-01').innerHTML += colorStopWords(onehundredyearsshort);
  document.getElementById('jitter-02').innerHTML += colorStopWords(onehundredyearsshort);
  
});


function colorStopWords(passage) {
  let words = passage.split(' ');

  let HTMLstr = '';

  for (i = 0; i < words.length; i++) { 
    let word = words[i];
    let char = word.charAt(0);

    if (stopArr.includes(word)) {
      HTMLstr += `<span class="words-stop shake-hard" style="bottom: ${Math.random() * (30 - 0) + 0}px">${word}</span> `
    } else if (word.startsWith('"') || word.endsWith('"') || word.endsWith(',') || word.endsWith('.')) {
      let res = word.replace('"', '').replace('.', '').replace(',', '');  
      if (stopArr.includes(res.toLowerCase())) {
        HTMLstr += `<span class="words-stop shake-hard" style="bottom: ${Math.random() * (30 - 0) + 0}px">${word}</span> `
      } else {
        HTMLstr += `<span class="words-space shake-hard">${word}</span> `;
      }

    } else if (char == char.toUpperCase()) {
      if (stopArr.includes(word.toLowerCase())) {
        HTMLstr += `<span class="words-stop" style="bottom: ${Math.random() * (30 - 0) + 0}px">${word}</span> `;
      } else {
        HTMLstr += `<span class="words-space">${word}</span> `;
      }
    } else {
      HTMLstr += `<span class="words-space">${word}</span> `;
    }
  }

  return HTMLstr;

}


function stopWordsToArrs(passage) {
  passage = passage.replace(/,/g, "").replace(/"/g, "").replace(/:/g, "").replace(/\' /g, "").toLowerCase();

  let words = passage.split(' ');

  for (i = 0; i < words.length; i++) {

    word_clean = words[i].split(".").join("")

    if (!stopwords.includes(word_clean)) {
      wordArr.push(word_clean)

    } else {
      stopArr.push(word_clean)
    }
  }

}