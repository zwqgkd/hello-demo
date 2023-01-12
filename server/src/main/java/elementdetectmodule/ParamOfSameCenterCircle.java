package elementdetectmodule;

import com.sun.jna.Pointer;
import com.sun.jna.Structure;

import java.util.Arrays;
import java.util.List;

public class ParamOfSameCenterCircle extends Structure {
    //public String url;
    public long matAddress;
    public Pointer center;
    public double R;
    public double magnification;
    /*内部类实现指针类型接口*/
    public static class ByReference extends ParamOfSameCenterCircle implements Structure.ByReference{}
    /*内部类实现值类型接口*/
    public static class ByValue extends ParamOfSameCenterCircle implements Structure.ByValue{}
    /**
     * 定义取值次序，需要与c++中对齐，不然报NoSuchFieldError
     * @return
     */
    @Override
    protected List<String> getFieldOrder() {
        return Arrays.asList(new String[] {"matAddress", "center", "R", "magnification"});
    }
}
