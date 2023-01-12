package opencvmodule;


import com.sun.jna.*;
import com.sun.jna.ptr.IntByReference;
import com.sun.jna.win32.StdCallLibrary;

public class dlltest {

    public interface dllexport extends StdCallLibrary {

        dllexport INSTANCE = (dllexport) Native.loadLibrary(("myproc.dll"), dllexport.class);
        //Pointer get(char[] a);
        //void test(long matAddress, long returnAddress, int ksize);
        //void testGaussianBlur(long matAddress, long returnAddress);
        void myMedianBlur(long matAddress, long returnAddress, int ksize);
        void test();
    }


    public interface imgcodes extends StdCallLibrary {

        imgcodes INSTANCE = (imgcodes) Native.loadLibrary(("myimgcodes.dll"), imgcodes.class);
        void myLoad(String fileName, int flags, long returnAddress);
        void myWrite(String fileName, long matAddress);
    }
}
