package deeplearningmodule;

import com.sun.jna.Library;
import com.sun.jna.Native;


public class ObjectDetector {
    public  interface  DLLMul extends Library{
        //DLLMul dllMul= Native.load("object_detection.dll",DLLMul.class);
        DLLMul dllMul= Native.load("object_detection.dll",DLLMul.class);
        //DLLMul dllMul= Native.load("Dlltest.dll",DLLMul.class);
//        int mul(int a,int b);
        // void mystart();
//        String testString(String s);
        int objectDetection(String url);
        void objectDetectionMat(long matAddress, long returnAddress,String model_path);

    }
}
