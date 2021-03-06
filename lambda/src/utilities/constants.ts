export enum RequestTypes {
	Launch = 'LaunchRequest',
	Intent = 'IntentRequest',
	SessionEnded = 'SessionEndedRequest',
	SystemExceptionEncountered = 'System.ExceptionEncountered',
}

export enum IntentTypes {
	Help = 'AMAZON.HelpIntent',
	Yes = 'AMAZON.YesIntent',
	Repeat = 'AMAZON.RepeatIntent',
	Stop = 'AMAZON.StopIntent',
	Cancel = 'AMAZON.CancelIntent',
	Fallback = 'AMAZON.FallbackIntent',
	Answer = 'AnswerIntent',
	HelloWorld = 'HelloWorldIntent',
}

export enum LocaleTypes {
	esES = 'es-ES',
	jaJP = 'ja-JP',
}

export enum Strings {
	QUESTIONS = 'QUESTIONS',
	SKILL_NAME = 'SKILL_NAME',
	WELCOME_MSG = 'WELCOME_MSG',
	GOODBYE_MSG = 'GOODBYE_MSG',
	HELLO_MSG = 'HELLO_MSG',
	HELP_MSG = 'HELP_MSG',
	HELP_START_MSG = 'HELP_START_MSG',
	HELP_GOING_MSG = 'HELP_GOING_MSG',
	ERROR_MSG = 'ERROR_MSG',
	REFLECTOR_MSG = 'REFLECTOR_MSG',
	FALLBACK_MSG = 'FALLBACK_MSG',
	NEW_GAME_MSG = 'NEW_GAME_MSG',
	DISPLAY_QUESTION_MESSAGE = 'DISPLAY_QUESTION_MESSAGE',
	TELL_QUESTION_MESSAGE = 'TELL_QUESTION_MESSAGE',
	ANSWER_CORRECT_MESSAGE = 'ANSWER_CORRECT_MESSAGE',
	ANSWER_WRONG_MESSAGE = 'ANSWER_WRONG_MESSAGE',
	CORRECT_ANSWER_MESSAGE = 'CORRECT_ANSWER_MESSAGE',
	ANSWER_IS_MESSAGE = 'ANSWER_IS_MESSAGE',
	GAME_OVER_MESSAGE = 'GAME_OVER_MESSAGE',
	UNHANDLE_MSG = 'UNHANDLE_MSG',
	ONE_MORE_MSG = 'ONE_MORE_MSG',
	WELCOME_BACK_MSG = 'WELCOME_BACK_MSG',
	SOON_MSG = 'SOON_MSG',
	ADD_QUIZ_MSG = 'ADD_QUIZ_MSG',
}

export const ANSWER_COUNT = 3;
export const GAME_LENGTH = 5;

export const questionSnd =
	'https://train-quiz.s3-ap-northeast-1.amazonaws.com/audio/question1_48k.mp3';
export const correctSnd =
	'https://train-quiz.s3-ap-northeast-1.amazonaws.com/audio/correct1_48k.mp3';
export const incorrectSnd =
	'https://train-quiz.s3-ap-northeast-1.amazonaws.com/audio/incorrect1_48k.mp3';
