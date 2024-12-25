export interface Question {
    _id: string;
    questID: number;
    question: string;
    options: {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
    };
    correctAnswer: keyof Question['options'];
}

export interface QuizResult {
    userID: string;
    totalQuestions: number;
    correctAnswers: number;
}