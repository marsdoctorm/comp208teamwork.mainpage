package com.comp208.implementation.implement;

import com.comp208.mappers.ShopContextMapper;
import com.comp208.entity.ShopContext;
import com.comp208.implementation.ShopContextService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by comp208 on 2024.3.1.
 */
@Service
public class ShopContextServiceImpl implements ShopContextService {
    @Resource
    private ShopContextMapper shopContextMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(ShopContext record) {
        return shopContextMapper.insert(record);
    }

    @Override
    public int insertSelective(ShopContext record) {
        return shopContextMapper.insertSelective(record);
    }

    @Override
    public ShopContext selectByPrimaryKey(Integer id) {
        return shopContextMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(ShopContext record) {
        return shopContextMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(ShopContext record) {
        return shopContextMapper.updateByPrimaryKey(record);
    }

    @Override
    public int getCounts(int sid) {
        return shopContextMapper.getCounts(sid);
    }

    @Override
    public List<ShopContext> findById(int sid, int start) {
        return shopContextMapper.findById(sid,start);
    }

    @Override
    public List<ShopContext> selectById(int id) {
        return shopContextMapper.selectBySid(id);
    }
}
