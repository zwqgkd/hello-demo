package elementdetectmodule;

import com.sun.jna.Structure;

import java.util.Arrays;
import java.util.List;

public class Circle extends Structure {
    public double x;
    public double y;
    public double r;
    public int isCircle;
    /*内部类实现指针类型接口*/
    public static class ByReference extends Circle implements Structure.ByReference{}
    /*内部类实现值类型接口*/
    public static class ByValue extends Circle implements Structure.ByValue{}
    /**
     * 定义取值次序，需要与c++中对齐，不然报NoSuchFieldError
     * @return
     */
    @Override
    protected List<String> getFieldOrder() {
        return Arrays.asList(new String[] {"x", "y", "r", "isCircle"});
    }
}
