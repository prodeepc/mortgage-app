import { mortgageCalculatorState } from 'app/pages/Calculator/slice/types';
import { GithubRepoFormState } from 'app/pages/HomePage/Features/GithubRepoForm/slice/types';
import { ThemeState } from 'styles/theme/slice/types';

export interface RootState {
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
  mortgageCalculator?: mortgageCalculatorState;
}
