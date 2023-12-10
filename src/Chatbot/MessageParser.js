class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("adoptar") || lowercase.includes("como adoptar") || lowercase.includes("como puedo adoptar")) {
        this.actionProvider.handleAdoptarQuiz();
      }
  
      if (lowercase.includes("denunciar") || lowercase.includes("como denuncio")|| lowercase.includes("como puedo denunciar")) {
        this.actionProvider.handleDenunciarQuiz();
      }
  
      if (lowercase.includes("colaborar") || lowercase.includes("como colaborar") || lowercase.includes("como puedo colaborar")) {
        this.actionProvider.handleDonarQuiz();
      }
    }
  }
  
  export default MessageParser;