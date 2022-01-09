import { useDispatch as _useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

const useDispatch = (): AppDispatch => _useDispatch();

export default useDispatch;
