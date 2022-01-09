import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '../redux/store';


const useSelector: TypedUseSelectorHook<AppState> = _useSelector;

export default useSelector;