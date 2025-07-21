import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  key: string;
}

interface QuizState {
  currentQuestion: number;
  answers: Record<string, string>;
  showResult: boolean;
  isEligible: boolean;
}

const EligibilityQuiz = ({ onClose }: { onClose: () => void }) => {
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is your profession or background?",
      options: [
        "High Income Professional",
        "Entrepreneur", 
        "Senior Executive",
        "Investor",
        "Scientist or Researcher",
        "Creative Professional",
        "PhD Holder or Academic",
        "None of the above"
      ],
      key: "profession"
    },
    {
      id: 2,
      question: "Do you meet any of the following criteria?",
      options: [],
      key: "criteria"
    },
    {
      id: 3,
      question: "Would you be able to provide proof of income, credentials, or position if asked?",
      options: ["Yes", "No"],
      key: "proof"
    }
  ];

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    showResult: false,
    isEligible: false
  });

  const getCriteriaOptions = (profession: string): string[] => {
    const criteriaMap: Record<string, string[]> = {
      "High Income Professional": [
        "Annual income exceeding $272,000 USD",
        "Working in medicine, engineering, science, or technology",
        "None of the above"
      ],
      "Entrepreneur": [
        "Own a business with minimum $500,000 USD investment",
        "Have a successful track record in business",
        "None of the above"
      ],
      "Senior Executive": [
        "Hold C-level or senior management position",
        "Annual compensation exceeding $272,000 USD",
        "None of the above"
      ],
      "Investor": [
        "Can invest minimum $2 million USD in real estate",
        "Have significant investment portfolio",
        "None of the above"
      ],
      "Scientist or Researcher": [
        "PhD in scientific field with research experience",
        "Published research in reputable journals",
        "None of the above"
      ],
      "Creative Professional": [
        "Internationally recognized in arts, culture, or sports",
        "Award-winning achievements in creative field",
        "None of the above"
      ],
      "PhD Holder or Academic": [
        "Hold PhD from accredited university",
        "Currently working in academic or research institution",
        "None of the above"
      ],
      "None of the above": [
        "I don't fit any of these categories",
        "I'm exploring other options"
      ]
    };
    
    return criteriaMap[profession] || ["Please select a profession first"];
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...quizState.answers, [questions[quizState.currentQuestion].key]: answer };
    
    if (quizState.currentQuestion === 0) {
      // Update question 2 options based on profession
      questions[1].options = getCriteriaOptions(answer);
    }
    
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers
      });
    } else {
      // Calculate eligibility
      const isEligible = calculateEligibility(newAnswers);
      setQuizState({
        ...quizState,
        answers: newAnswers,
        showResult: true,
        isEligible
      });
    }
  };

  const calculateEligibility = (answers: Record<string, string>): boolean => {
    // User is eligible if:
    // 1. They have a qualifying profession (not "None of the above")
    // 2. They meet relevant criteria (not "None of the above")
    // 3. They can provide proof
    
    const profession = answers.profession;
    const criteria = answers.criteria;
    const proof = answers.proof;
    
    if (profession === "None of the above") return false;
    if (criteria?.includes("None of the above")) return false;
    if (proof === "No") return false;
    
    return true;
  };

  const goBack = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1
      });
    }
  };

  const getCurrentQuestion = () => {
    const question = questions[quizState.currentQuestion];
    if (question.id === 2 && quizState.answers.profession) {
      return {
        ...question,
        options: getCriteriaOptions(quizState.answers.profession)
      };
    }
    return question;
  };

  const currentQuestion = getCurrentQuestion();

  if (quizState.showResult) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl">
          <div className="text-center">
            {quizState.isEligible ? (
              <>
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Congratulations! You're Eligible
                </h3>
                <p className="text-slate-600 mb-6">
                  Based on your responses, you are eligible for the Golden Visa.
                  To take the next steps, please get in touch with our team.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      onClose();
                      // Navigate to contact form
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 border border-slate-300 text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Let's Explore Your Options
                </h3>
                <p className="text-slate-600 mb-6">
                  Thank you for sharing your details. While some criteria may need a closer review, 
                  our team would love to understand your profile better. Let's explore personalized 
                  options together — please fill out the full form to proceed.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      onClose();
                      // Navigate to contact form
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 border border-slate-300 text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">
              Question {quizState.currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-slate-600">
              {Math.round(((quizState.currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((quizState.currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 border border-slate-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 group"
            >
              <span className="text-slate-700 group-hover:text-slate-900">
                {option}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goBack}
            disabled={quizState.currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          
          <button
            onClick={onClose}
            className="px-6 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-all duration-300"
          >
            Close Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityQuiz;